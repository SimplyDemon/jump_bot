<?php
if ( ! empty( $_POST ) && isset( $_POST['rockPosition'] ) && isset( $_POST['timeWasted'] ) && isset( $_POST['rockSize'] ) && isset( $_POST['jumpDistance'] ) && isset( $_POST['status'] ) ) {
	require_once 'Result.php';

	$results = new sd\Result();
	$result  = $results->store( $_POST['rockPosition'], $_POST['timeWasted'], $_POST['rockSize'], $_POST['jumpDistance'], $_POST['status'] );

	if ( $result['execute'] ) {
		echo json_encode( [
			'success' => true,
		] );
	} else {
		echo json_encode( [
			'success' => false,
			'error'   => $result['pdo']->errorCode(),
		] );
	}
} else {
	echo json_encode( [
		'success' => false,
		'error'   => 'Not enough data',
	] );
}
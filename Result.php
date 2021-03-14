<?php


namespace sd;
require_once 'DB.php';

class Result {

	function store( $rockPosition, $timeWasted, $rockSize, $jumpDistance, $status ) {
		$db      = new DB();
		$pdo     = $db->connect();
		$sql     = "INSERT INTO results (rock_position, time_wasted, rock_size, jump_distance, status) VALUES (?,?,?,?,?)";
		$execute = $pdo->prepare( $sql )->execute( [ $rockPosition, $timeWasted, $rockSize, $jumpDistance, $status ] );

		return [
			'execute' => $execute,
			'pdo'     => $pdo
		];
	}

}
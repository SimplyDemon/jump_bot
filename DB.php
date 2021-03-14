<?php


namespace sd;
require_once 'env.php';

use PDO;


class DB {
	function connect() {
		return $dbh = new PDO( 'mysql:host=' . getenv( 'db_host' ) . ';dbname=' . getenv( 'db_name' ), getenv( 'db_user' ), getenv( 'db_password' ) );
	}
}
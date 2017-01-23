<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$me =  $_SESSION['username'];

	$userTab = "SELECT name, birth FROM members WHERE username LIKE '%{$me}%'";

	$stmt = $db->prepare($userTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['User'][] = $row;

	}

	echo json_encode($userData)


?>

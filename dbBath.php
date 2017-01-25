<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$me =  $_SESSION['username'];

	$bathTab = "SELECT * FROM bath WHERE username LIKE '%{$me}%' ORDER BY bathdate DESC";

	$stmt = $db->prepare($bathTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['Bath'][] = $row;

	}

	echo json_encode($userData);

?>

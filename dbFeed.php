<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$feedTab = "SELECT * FROM feed ORDER BY startdate DESC, starttime DESC";

	$stmt = $db->prepare($feedTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['Feed'][] = $row;

	}

	echo json_encode($userData);

?>

<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$me =  $_SESSION['username'];

	$diaryTab = "SELECT * FROM diary WHERE username LIKE '%{$me}%' ORDER BY diarydate DESC";

	$stmt = $db->prepare($diaryTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['Diary'][] = $row;

	}

	echo json_encode($userData);

?>

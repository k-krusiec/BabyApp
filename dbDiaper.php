<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$diaperTab = "SELECT * FROM diaper ORDER BY diaperdate DESC, diapertime DESC";

	$stmt = $db->prepare($diaperTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['Diaper'][] = $row;

	}

	echo json_encode($userData);

?>

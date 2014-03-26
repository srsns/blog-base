<?php

global $project;
$project = 'mysite';

global $databaseConfig;
require('local.conf.php');

MySQLDatabase::set_connection_charset('utf8');

// Set the current theme. More themes can be downloaded from
// http://www.silverstripe.org/themes/
SSViewer::set_theme('basic');

// Set the site locale
i18n::set_locale('en_US');

// Enable nested URLs for this site (e.g. page/sub-page/)
if (class_exists('SiteTree')) SiteTree::enable_nested_urls();

FulltextSearchable::enable();
if(class_exists('PageComment')) {
    PageComment::enableBBCode();
    PageComment::enableModeration();
}

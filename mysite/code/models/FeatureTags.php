<?php

class FeatureTags extends DataObject {
    static private $db = array(
        'Title' => 'Varchar(255)',
        'Tag'   => 'Varchar(255)',
        'Enabled' => 'Boolean'
    );

    static private $has_one = array(
        'Image' => 'Image',
//        'Page'  => 'Page'
    );
}

<?php
class Page extends SiteTree {

	static private $db = array(
	);

	static private $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	private static $allowed_actions = array (
	);

	public function init() {
		parent::init();


		// Note: you should use SS template require tags inside your template
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work

/*		Requirements::javascript('mysite/javascript/share.js');
		Requirements::themedCSS('layout');
		Requirements::themedCSS('typography');
		Requirements::themedCSS('form');
*/

	}

    public function LastVideoBlogEntry()
    {
        return VideoBlogEntry::get_one('VideoBlogEntry');
    }

    public function FeatureTags()
    {
        return FeatureTags::get('FeatureTags', 'Enabled = 1');
    }
}

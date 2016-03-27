import test from 'ava';
import m from './';

test('fetch image', async t => {
	t.true(Buffer.isBuffer(await m('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=46306910')));
});

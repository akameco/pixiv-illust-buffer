# pixiv-illust-buffer [![Build Status](https://travis-ci.org/akameco/pixiv-illust-buffersvg?branch=master)](https://travis-ci.org/akameco/pixiv-illust-buffer)

> fetch pixiv illust buffer

## Installation

```
$ npm install --save pixiv-illust-buffer 
```

## Usage

```js
const pixiv = require('pixiv-illust-buffer');
const termImg = require('term-img');

pixiv('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=46306910').then(buffer => {
	termImg(buffer);
});
```

## License

MIT

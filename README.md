# appcan-address-selector

> 数据来源
> [http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/)

##### 使用方法

```shell
$ cd source
$ node txt2json.js
$ node json2tree.js
```

注意文件是以append的方式写入的

##### 支持的插件
uexWheelPickView
http://newdocx.appcan.cn/newdocx/docx?type=1748_975

注意 uexWheelPickView 插件需要所以地区的数据都是完全的三级结构，否则无法正常渲染，
故对于港澳台地区的数据需要做如下特殊处理：

```json
[
  {
    "code": "710000",
    "name": "台湾省",
    "sub": [{
      "code": "710100",
      "name": "-",
      "sub": ["-"]
    }]
  },
  {
    "code": "810000",
    "name": "香港特别行政区",
    "sub": [{
      "code": "810100",
      "name": "-",
      "sub": ["-"]
    }]
  },
  {
    "code": "820000",
    "name": "澳门特别行政区",
    "sub": [{
      "code": "820100",
      "name": "-",
      "sub": ["-"]
    }]
  }
]
```

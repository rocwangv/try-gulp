# try-gulp

## 常用的gulp工具包

* `gulp-uglify`  压缩js代码
* `gulp-minify-css`  压缩css代码
* `gulp-imagemin`  压缩图片
* `gulp-less`  压缩编译less代码
* `gulp-ruby-sass`  压缩编译sass代码
* `pump`  用来替代gulp.pipe()的一个模块，可以快速定位代码的错误位置
* `gulp-watch-path`  自动监听模块
* `gulp-sourcemaps`  生成sourcemap文件，方便开发环境的调试
* `gulp-autoprefixer`  自动添加css前缀，如：-webkit-、-mos-等
* `gulp-util`  输出带时间和颜色
  

## gulp.task

`gulp.task` 可以接受两个参数，第一个是自定义的任务名称，第二个是要执行的函数，如：

```js
 gulp.task('compressjs', function () {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})
```

## pump

pump是一个小节点模块，将流连接在一起，如果其中一个关闭，则会将它们全部破坏。当dest发出关闭或错误时，使用标准source.pipe（dest）事件源将不会被销毁。 您还不能提供回调来告诉管道何时完成。

当使用Node.js流中的管道时，错误不会通过管道流传播，如果目标流关闭，则源流不会关闭。 泵模块将这些问题规范化，并在回调中传递错误。

使用`pump`替代`pipe`以后，上文中的写法可以改为：

```js
 gulp.task('compressjs', function (cb) {
     pump([
         gulp.src('src/js/**/*.js'),
         uglify(),
         gulp.dest('dist/js')
     ],cb)
})
```


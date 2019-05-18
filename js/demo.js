 $eleBtn2.click(function(){
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action","https://mcminiz.github.io/apps/666_1.1.apk");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();
        });
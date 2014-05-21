'use strict';

angular.module('griddirApp')
.controller('MyrouteCtrl', function ($scope) {
$scope.awesomeThings = [
'HTML5 Boilerplate',
'AngularJS',
'Unicorns'
];
$scope.tabular = [
['item name 001 title','info 001','details 001','description 001','item name 001','information 001','detail 001','descrip 001','october','120000','Tuesday','aaa','a','1/1/14','1:15','5% '],
['item name 002 title','info 002','details 002','description 002','item name 002','information 002','detail 002','descrip 002','november', '130000','Wednesday','bbb bbb','b','1/2/14','2:15','7% '],
['item name 003 title','info 003','details 003','description 003','item name 003','information 003','detail 003','descrip 003','december', '140000','Thursday','ccc ccc ccc','c','1/3/14','3:15','9% '],
['item name 004 title','info 004','details 004','description 004','item name 004','information 004','detail 004','descrip 004','january','150000','Friday','aaa','d','1/4/14','4:15','11%'],
['item name 005 title','info 005','details 005','description 005','item name 005','information 005','detail 005','descrip 005','february', '160000','Saturday','bbb bbb','e','1/5/14','5:15','13%'],
['item name 006 title','info 006','details 006','description 006','item name 006','information 006','detail 006','descrip 006','march','170000','Sunday','ccc ccc ccc','f','1/6/14','6:15','15%'],
['item name 007 title','info 007','details 007','description 007','item name 007','information 007','detail 007','descrip 007','april','180000','Monday','aaa','g','1/7/14','7:15','17%'],
['item name 008 title','info 008','details 008','description 008','item name 008','information 008','detail 008','descrip 008','may','190000','Tuesday','bbb bbb','h','1/8/14','8:15','19%'],
['item name 009 title','info 009','details 009','description 009','item name 009','information 009','detail 009','descrip 009','june', '200000','Wednesday','ccc ccc ccc','i','1/9/14','9:15','21%'],
['item name 010 title','info 010','details 010','description 010','item name 010','information 010','detail 010','descrip 010','july', '210000','Thursday','aaa','j','1/10/14','10:15','23%'],
['item name 011 title','info 011','details 011','description 011','item name 011','information 011','detail 011','descrip 011','august', '220000','Friday','bbb bbb','k','1/11/14','11:15','25%'],
['item name 012 title','info 012','details 012','description 012','item name 012','information 012','detail 012','descrip 012','september','230000','Saturday','ccc ccc ccc','l','1/12/14','12:15','27%'],
['item name 013 title','info 013','details 013','description 013','item name 013','information 013','detail 013','descrip 013','october','240000','Sunday','aaa','m','1/13/14','13:15','29%'],
['item name 014 title','info 014','details 014','description 014','item name 014','information 014','detail 014','descrip 014','november', '250000','Monday','bbb bbb','n','1/14/14','14:15','31%'],
['item name 015 title','info 015','details 015','description 015','item name 015','information 015','detail 015','descrip 015','december', '260000','Tuesday','ccc ccc ccc','o','1/15/14','15:15','33%'],
['item name 016 title','info 016','details 016','description 016','item name 016','information 016','detail 016','descrip 016','january','270000','Wednesday','aaa','p','1/16/14','16:15','35%'],
['item name 017 title','info 017','details 017','description 017','item name 017','information 017','detail 017','descrip 017','february', '280000','Thursday','bbb bbb','q','1/17/14','17:15','37%'],
['item name 018 title','info 018','details 018','description 018','item name 018','information 018','detail 018','descrip 018','march','290000','Friday','ccc ccc ccc','r','1/18/14','18:15','39%'],
['item name 019 title','info 019','details 019','description 019','item name 019','information 019','detail 019','descrip 019','april','300000','Saturday','aaa','s','1/19/14','19:15','41%'],
['item name 020 title','info 020','details 020','description 020','item name 020','information 020','detail 020','descrip 020','may','310000','Sunday','bbb bbb','t','1/20/14','20:15','43%'],
['item name 021 title','info 021','details 021','description 021','item name 021','information 021','detail 021','descrip 021','june', '320000','Monday','ccc ccc ccc','u','1/21/14','21:15','45%'],
['item name 022 title','info 022','details 022','description 022','item name 022','information 022','detail 022','descrip 022','july', '330000','Tuesday','aaa','v','1/22/14','22:15','47%'],
['item name 023 title','info 023','details 023','description 023','item name 023','information 023','detail 023','descrip 023','august', '340000','Wednesday','bbb bbb','w','1/23/14','23:15','49%'],
['item name 024 title','info 024','details 024','description 024','item name 024','information 024','detail 024','descrip 024','september','350000','Thursday','ccc ccc ccc','x','1/24/14','0:15','51%'],
['item name 025 title','info 025','details 025','description 025','item name 025','information 025','detail 025','descrip 025','october','360000','Friday','aaa','y','1/25/14','1:15','53%'],
['item name 026 title','info 026','details 026','description 026','item name 026','information 026','detail 026','descrip 026','november', '370000','Saturday','bbb bbb','z','1/26/14','2:15','55%'],
['item name 027 title','info 027','details 027','description 027','item name 027','information 027','detail 027','descrip 027','december', '380000','Sunday','ccc ccc ccc','a','1/27/14','3:15','57%'],
['item name 028 title','info 028','details 028','description 028','item name 028','information 028','detail 028','descrip 028','january','390000','Monday','aaa','b','1/28/14','4:15','59%'],
['item name 029 title','info 029','details 029','description 029','item name 029','information 029','detail 029','descrip 029','february', '400000','Tuesday','bbb bbb','c','1/29/14','5:15','61%'],
['item name 030 title','info 030','details 030','description 030','item name 030','information 030','detail 030','descrip 030','march','410000','Wednesday','ccc ccc ccc','d','1/30/14','6:15','63%'],
['item name 031 title','info 031','details 031','description 031','item name 031','information 031','detail 031','descrip 031','april','420000','Thursday','aaa','e','1/31/14','7:15','65%'],
['item name 032 title','info 032','details 032','description 032','item name 032','information 032','detail 032','descrip 032','may','430000','Friday','bbb bbb','f','2/1/14','8:15','67%'],
['item name 033 title','info 033','details 033','description 033','item name 033','information 033','detail 033','descrip 033','june', '440000','Saturday','ccc ccc ccc','g','2/2/14','9:15','69%'],
['item name 034 title','info 034','details 034','description 034','item name 034','information 034','detail 034','descrip 034','july', '450000','Sunday','aaa','h','2/3/14','10:15','71%'],
['item name 035 title','info 035','details 035','description 035','item name 035','information 035','detail 035','descrip 035','august', '460000','Monday','bbb bbb','i','2/4/14','11:15','73%'],
['item name 036 title','info 036','details 036','description 036','item name 036','information 036','detail 036','descrip 036','september','470000','Tuesday','ccc ccc ccc','j','2/5/14','12:15','75%'],
['item name 037 title','info 037','details 037','description 037','item name 037','information 037','detail 037','descrip 037','october','480000','Wednesday','aaa','k','2/6/14','13:15','77%'],
];
});

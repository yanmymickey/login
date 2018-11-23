function login() {
    var worng1 = document.getElementById("worng1");
    var worng2 = document.getElementById("worng2");
    var worng3 = document.getElementById("worng3");
	let username = document.getElementById('AccountNumber').value;
	let password = document.getElementById('password').value;
	let code = document.getElementById('vc').value;
	let ajax = new XMLHttpRequest();
	ajax.open('POST',"http://tech.sky31.top/login.php","false");
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send("username="+username+"&password="+password+"&code="+code);
	ajax.onreadystatechange = function(){
		if (ajax.readyState == 4 && ajax.status == 200) {
		let 	result = JSON.parse(ajax.responseText);
			console.log(result);
			switch (result.code){
				 case 0:
                    change(result);
                    con1=confirm(result.data.name +"   "+ result.data.age +"岁      "+ sex +"性      "+"电话号码："+ result.data.other.phone +"      家庭住址："+result.data.other.address);
                    if (con1==true) {
                    	con2=confirm("送你一个九九乘法表");
                    	if (con2==true) {
                    		window.open("./99.php");	
                    	}
                    }
                    break;
                case 1:
                	worng1.style.display="block";
                    worng2.style.display="block";
                    worng3.style.display="block";
			    case 3:
			        alert("请输入正确的账户和密码");
			        break;
                case 2:
                    alert("账号或密码格式错误")
                    worng1.style.display="block";
                    worng2.style.display="block";
                    worng3.style.display="block";
			}

		}
	}
	function change (result) {
		switch (result.data.sex){
			case "0":
				sex = "男";
				break;
			case "1":
				sex = "女";
				break;
		}
		console.log(result.data.sex);
	}
}


function myFunction() {
    console.log("hello");
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    // var dataString = 'name=' + name + '&email=' + email + '&age=' + age;
    var dataString = {
        name: name,
        email: email,
        age: age
    };
    console.log(dataString);
    if (name == '' || email == '' || age == '') {
        alert("Please Fill All Fields");
    } else {
        $.ajax({
            url: 'add.php',
            type: 'POST',
            data: JSON.stringify(dataString),
            contentType:'charset=utf-8',
            dataType: 'json',
            success:function(result) {
                alert('added successfully');
                console.log("ajx",result);
            }
        });
    }
    return false;
}
    
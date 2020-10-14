window.onload = function() {
    document.getElementById("Save").onclick = function fun() {
        var x = document.forms["myForm"]["ip_address"].value;
        var Url = "https://httpbin.org/post";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', Url, true);
        xhr.send(x);
        xhr.onreadystatechange = processRequest;
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response1 = JSON.parse(xhr.responseText);
                document.getElementById("origin").innerHTML = response1.origin;
                document.getElementById("url").innerHTML = response1.url;
                document.getElementById("data").innerHTML = response1.data;
            }
        }
    }
}
function checkUser(username, password, file)
{
//function readTextFile(file)
//{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
		if(allText.indexOf(username + "," + password + "\n") != -1)
                {
                    alert("test");
                }
            }
        }
    }
    rawFile.send(null);
//}
}

//test call
checkUser("Brandon", "bjpitts", "list.txt");

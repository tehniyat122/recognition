 /* global fullname, form1, subject */

var namepattern=/^[a-zA-Z]+$/;
 var phonepattern = /^\d{10}$/;
 var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/;
 var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/;
 var idpattern=/^\d{6}$/;
 function next() {
    win=window.open("login.jsp");
    
}
function validatepassporttype(theform)
{
  var x=1;
    document.getElementById("za").style.color="white";
    document.getElementById("zb").style.color="white";
    document.getElementById("zc").style.color="white";
    document.getElementById('pointaa').innerHTML="";
    document.getElementById('pointab').innerHTML="";
    document.getElementById('pointac').innerHTML="";
    if((theform.aaa.checked===false) && (theform.aab.checked===false))
    {
      document.getElementById('pointaa').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("za").style.color="red";
    }
    if((theform.aba.checked===false) && (theform.abb.checked===false))
    {
      document.getElementById('pointac').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("zb").style.color="red";
    }
    if((theform.aca.checked===false) && (theform.acb.checked===false))
    {
      document.getElementById('pointac').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("zc").style.color="red";
    }
    
    if(x==1)
    {

   
   
      //  document.form1.reload();
         return confirm("Do you want to submit the form?");
    }
    return false;
    
    
}

function validateForm(theform)
{
 
 var y=0;
    document.getElementById('pointfn').innerHTML="";
    document.getElementById('pointen').innerHTML="";
    document.getElementById('pointmn').innerHTML="";
    document.getElementById('ca').style.color="white";
    document.getElementById('cb').style.color="white";
    document.getElementById('cc').style.color="white";
 
 if ((theform.fullname.value=="")||(theform.fullname.value.length>35)||(!namepattern.test(theform.fullname.value)))
 {   
    document.getElementById('pointfn').innerHTML="Please fill the field less than 35 characters(alphabets)";
    document.getElementById('ca').style.color="red";
    y=y+1;
 }
 if((theform.email.value=="")||(!emailpattern.test(theform.email.value)))
 {
     
  document.getElementById('pointen').innerHTML="Please enter a valid email id.";
  document.getElementById('cb').style.color="red";
  y=y+1;
  }
if((theform.feedback.value=="" ))
 {
     
 document.getElementById('pointmn').innerHTML="Please enter the message.";
 document.getElementById('cc').style.color="red";
 y=y+1;
 }
 if(y==0)
{
   
    return confirm("Do you want to submit the form?");
 
}
return false;
}


function validateForm_family(theform)
{
var y=0;
var mx=12;
var mn=5;
document.getElementById('pointfn').innerHTML="";
document.getElementById('pointsn').innerHTML="";
document.getElementById('pointmn').innerHTML="";
document.getElementById('pointgn').innerHTML="";
document.getElementById('pointan').innerHTML="";
document.getElementById('fa').style.color="white";
document.getElementById('fb').style.color="white";
document.getElementById('fc').style.color="white";
document.getElementById('fd').style.color="white";
document.getElementById('fe').style.color="white";
 if (theform.fname.value==""||theform.fname.value.length>35||(!namepattern.test(theform.fname.value)))
 {
    document.getElementById('pointfn').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
    document.getElementById('fa').style.color="red";
 y=y+1;

   
}
 if (theform.sname.value==""||theform.sname.value.length>35||(!namepattern.test(theform.sname.value)))
 {
    document.getElementById('pointsn').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
document.getElementById('fb').style.color="red";
 y=y+1;
   
}
if (theform.mname.value==""||theform.mname.value.length>35||(!namepattern.test(theform.mname.value)))
 {
    document.getElementById('pointmn').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
document.getElementById('fc').style.color="red";
 y=y+1;

   }
  

 if (theform.gname.value==""||theform.gname.value.length>35||(!namepattern.test(theform.gname.value)))
 {
    document.getElementById('pointgn').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
document.getElementById('fd').style.color="red";
 y=y+1;

   }
  
 

 if(theform.address.value==null || theform.address.value=="" )
 {
 document.getElementById('pointan').innerHTML="Please enter the address.";
 
document.getElementById('fe').style.color="red";
 y=y+1;
}
if(y==0)
{
 return confirm("Do you want to submit the form?");
}
return false;
}
function validateForm_usereg(theform)
{  
    var y=0;
    
   
     
      document.getElementById('pointub').innerHTML="";
      document.getElementById('ub').style.color="white";
      document.getElementById('pointuc').innerHTML="";
      document.getElementById('uc').style.color="white";
      document.getElementById('pointud').innerHTML="";
      document.getElementById('ud').style.color="white";
      document.getElementById('pointue').innerHTML="";
      document.getElementById('ue').style.color="white";
      document.getElementById('pointuf').innerHTML="";
      document.getElementById('uf').style.color="white";
      document.getElementById('pointug').innerHTML="";
      document.getElementById("ug").style.color="white";
      document.getElementById('pointuh').innerHTML="";
      document.getElementById("uh").style.color="white";
      document.getElementById('pointui').innerHTML="";
      document.getElementById("ui").style.color="white";
      document.getElementById('pointuj').innerHTML="";
      document.getElementById("uj").style.color="white";
      document.getElementById('pointuk').innerHTML="";
      document.getElementById("uk").style.color="white";
      document.getElementById('pointul').innerHTML="";
      document.getElementById("ul").style.color="white";
   
   if(document.getElementById("place").value == "")
   {
            
        document.getElementById('pointub').innerHTML="Please select anyone.";
      y=y+1;
      document.getElementById("ub").style.color="red";
  
   }
    if (theform.gname.value==""||theform.gname.value.length>35||(!namepattern.test(theform.gname.value)))
 {
   
    document.getElementById('pointuc').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
    document.getElementById('uc').style.color="red";
 y=y+1;

   
}
 if (theform.sname.value==""||theform.sname.value.length>35||(!namepattern.test(theform.sname.value)))
 {
   
    document.getElementById('pointud').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
document.getElementById('ud').style.color="red";
 y=y+1;
   
}
if(theform.dob.value=="")
      {
   
           document.getElementById('pointue').innerHTML="Please enter dob.";
            y=y+1;
           document.getElementById("ue").style.color="red";
   
      }
 if((theform.email.value=="")||(!emailpattern.test(theform.email.value)))
 {
   
  document.getElementById('pointuf').innerHTML="Please enter a valid email id.";
  document.getElementById('uf').style.color="red";
  y=y+1;
  }
    if((theform.yes.checked===false) && (theform.no.checked===false))
    {
       
      document.getElementById('pointug').innerHTML="Please select any one";
      y=y+1;
      document.getElementById("ug").style.color="red";
    }
 if(theform.yes.checked==true)
  {
   document.getElementById("lid").value=theform.email.value;
  }
  if(theform.no.checked==true)
  {
      if(document.getElementById("lid").value==""||theform.lid.value>10)
      {
       
           document.getElementById('pointuh').innerHTML="Please enter login id with less than 10 characters";
            y=y+1;
           document.getElementById("uh").style.color="red";
   
      }
  }
  if(theform.pwd.value==""||theform.pwd.value<8||theform.pwd.value>12||(namepattern.test(theform.pwd.value)))
  {
      
        document.getElementById('pointui').innerHTML="Please enter the password.(Max character=12,Min character=5,alphanumberic)";
      y=y+1;
      document.getElementById("ui").style.color="red";
   
 }
 if(theform.cpwd.value!=theform.pwd.value)
 {
     
        document.getElementById('pointuj').innerHTML="Password do not match.";
      y=y+1;
      document.getElementById("uj").style.color="red";
   
 }
  if(document.getElementById("hq").value == "")
   {
     
      document.getElementById('pointuk').innerHTML="Please select any one.";
      y=y+1;
      document.getElementById("uk").style.color="red";
  
   }
 if(theform.hans.value=="")
 {
     
        document.getElementById('pointul').innerHTML="Please fill the answer.";
      y=y+1;
      document.getElementById("ul").style.color="red";
   
 }
 if(y==0)
 {
        var a=document.getElementById("place").value;
        var a1=document.getElementById("gname").value;
        var a2=document.getElementById("sname").value;
        var a3=document.getElementById("dob").value;
        pass(a,a1,a2,a3);
        return confirm("Do you want to submit the form?");
   
 }
  return false;
}




function validateForm_emer(theform)
{
        
    var y=0;
   
document.getElementById('pointea').innerHTML="";
document.getElementById('pointeb').innerHTML="";
document.getElementById('pointec').innerHTML="";
document.getElementById('pointed').innerHTML="";
document.getElementById('pointef').innerHTML="";
document.getElementById('pointeg').innerHTML="";
document.getElementById('pointeh').innerHTML="";
document.getElementById('pointei').innerHTML="";

document.getElementById('ea').style.color="white";
document.getElementById('eb').style.color="white";
document.getElementById('ec').style.color="white";
document.getElementById('ed').style.color="white";
document.getElementById('ef').style.color="white";
document.getElementById('eg').style.color="white";
document.getElementById('eh').style.color="white";
document.getElementById('ei').style.color="white";

if (theform.Name.value==""||theform.Name.value.length>35||(!namepattern.test(theform.Name.value)))
 {
    document.getElementById('pointea').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
    document.getElementById('ea').style.color="red";
 y=y+1;

  }
  
  if(theform.address.value==null || theform.address.value=="" )
 {
 document.getElementById('pointeb').innerHTML="Please enter the address.";

document.getElementById('eb').style.color="red";
  y=y+1;
  
}
if (theform.tel.value==""||theform.tel.value.length>11||theform.tel.value.length<9||(!phonepattern.test(theform.tel.value)))
 {
    document.getElementById('pointec').innerHTML="Please fill valid number(numbers).";
 
    document.getElementById('ec').style.color="red";
 
y=y+1;
  }
  
  if (theform.Mob.value==""||theform.Mob.value.length>10||theform.Mob.value.length<9||(!phonepattern.test(theform.Mob.value)))
 {
    document.getElementById('pointed').innerHTML="Please fill the valid number(number).";
 
    document.getElementById('ed').style.color="red";
 
y=y+1;
  }
  if (theform.Namer.value==""||theform.Namer.value.length>35||(!namepattern.test(theform.Namer.value)))
 {
    document.getElementById('pointef').innerHTML="Please fill the field less than 35 characters(alphabets).";

    document.getElementById('ef').style.color="red";
  y=y+1;

  }
  
  if(theform.addrr.value==null || theform.addrr.value=="" )
 {
 document.getElementById('pointeg').innerHTML="Please enter the address.";
 
document.getElementById('eg').style.color="red";
 y=y+1;

}
if (theform.telr.value==""||theform.telr.value.length>11||theform.telr.value.length<10||(!phonepattern.test(theform.telr.value)))
 {
    document.getElementById('pointeh').innerHTML="Please fill the valid number(number).";
 
    document.getElementById('eh').style.color="red";
 y=y+1;

  }
  if (theform.mobr.value==""||theform.mobr.value.length>10||theform.mobr.value.length<9||(!phonepattern.test(theform.mobr.value)))
 {
    document.getElementById('pointei').innerHTML="Please fill the valid number(number).";

    document.getElementById('ei').style.color="red";
  y=y+1;

  }

if(y==0)
 {
      return confirm("Do you want to submit the form?");
 }
 
  return false;
  
}


function validateForm_self(theform)
{
    
document.getElementById('pointsa').innerHTML="";
document.getElementById('pointsb').innerHTML="";
   
document.getElementById("sa").style.color="white";
document.getElementById("sb").style.color="white";
document.getElementById("sc").style.color="white";

   
    var y=0;
    if(theform.place.value=="")
      {
        
document.getElementById('pointsa').innerHTML="Please enter place.";
     
            y=y+1;
 
           document.getElementById("sa").style.color="red";
   
     }
 
    if(theform.dob.value=="")
      {
            document.getElementById('pointsb').innerHTML="Please enter date.";
            y=y+1;
           document.getElementById("sb").style.color="red";
   
     }
     if(theform.no.checked==false)
         {
           
            y=y+1;
           document.getElementById("sc").style.color="red";
   
     }
    if(y==0)
 {
      return confirm("Do you want to submit the form?");
 }
 
  return false;
}

function validatepassporttypeother(theform)
{
  var x=1;
    document.getElementById("oa").style.color="white";
    document.getElementById("ob").style.color="white";
    document.getElementById("oc").style.color="white";     document.getElementById("od").style.color="white";         document.getElementById("oe").style.color="white";
    document.getElementById('pointaa').innerHTML="";
    document.getElementById('pointab').innerHTML="";
    document.getElementById('pointac').innerHTML="";
   document.getElementById('pointad').innerHTML="";
   document.getElementById('pointae').innerHTML="";
    if((theform.aaa.checked===false) && (theform.aab.checked===false))
    {
      document.getElementById('pointaa').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("oa").style.color="red";
    }
    if((theform.aac.checked===false) && (theform.aad.checked===false))
    {
      document.getElementById('pointab').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("ob").style.color="red";
    }
    if((theform.aae.checked===false) && (theform.aaf.checked===false))
    {
      document.getElementById('pointad').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("oc").style.color="red";
    }
     if((theform.aag.checked===false) && (theform.aah.checked===false))
    {
      document.getElementById('pointac').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("od").style.color="red";
    }
    
 if((theform.aai.checked===false) && (theform.aaj.checked===false))
    {
      document.getElementById('pointae').innerHTML="Please select any one";
      x=x-1;
      document.getElementById("oe").style.color="red";
    }
    
    if(x==1)
    {
      
   
       document.load();
      //  document.form1.reload();
        
    }
    return false;
    
    
}
function pre(theform)
{
  

 function pass(a, a1, a2, a3)
 {
    
   document.getElementById("sname").value=a2;
   document.getElementById("gname").value=a1;
   document.getElementById("dob").value=a3;
 }
 return true;
}

function validateForm_app(theform)
{   
    
    var y=0;
    
    
     
      document.getElementById('pointaa').innerHTML="";
      document.getElementById('aa').style.color="white";
      document.getElementById('pointab').innerHTML="";
      document.getElementById('ab').style.color="white";
      document.getElementById('pointac').innerHTML="";
      document.getElementById('ac').style.color="white";
      document.getElementById('pointad').innerHTML="";
      document.getElementById('ad').style.color="white";
      document.getElementById('pointae').innerHTML="";
      document.getElementById('ae').style.color="white";
      document.getElementById('pointaf').innerHTML="";
      document.getElementById("af").style.color="white";
      document.getElementById('pointag').innerHTML="";
      document.getElementById("ag").style.color="white";
      document.getElementById('pointah').innerHTML="";
      document.getElementById('pointai').innerHTML="";
      document.getElementById("ai").style.color="white";
      document.getElementById("ah").style.color="white";
      document.getElementById('pointaj').innerHTML="";
      document.getElementById("aj").style.color="white";
      document.getElementById('pointak').innerHTML="";
      document.getElementById("ak").style.color="white";
     
   
    //a=a+1;
    //document.getElementById("aid").value=a;
    if (theform.name.value==""||theform.name.value.length>35||(!namepattern.test(theform.name.value)))
 {
       
    document.getElementById('pointaa').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
    document.getElementById('aa').style.color="red";
 y=y+1;

   
}
 if (theform.sname.value==""||theform.sname.value.length>35||(!namepattern.test(theform.sname.value)))
 {
     
    document.getElementById('pointab').innerHTML="Please fill the field less than 35 characters(alphabets).";
 
document.getElementById('ab').style.color="red";
 y=y+1;
   
}
  if((document.getElementById("f").checked===false) && (document.getElementById("m").checked===false))
    {
    
      document.getElementById('pointac').innerHTML="Please select any one";
      y=y+1;
      document.getElementById("ac").style.color="red";
    }

if(theform.dob.value=="")
      {
         
           document.getElementById('pointad').innerHTML="Please enter dob.";
            y=y+1;
           document.getElementById("ad").style.color="red";
   
      }
      if (theform.pob.value==""||theform.pob.value.length>35||(!namepattern.test(theform.pob.value)))
 {
          
    document.getElementById('pointae').innerHTML="Please fill the field (alphabets).";
 
    document.getElementById('ae').style.color="red";
 y=y+1;

   
}
if (theform.state.value==""||theform.state.value.length>35||(!namepattern.test(theform.state.value)))
 {
          
    document.getElementById('pointaf').innerHTML="Please fill the field (alphabets).";
 
    document.getElementById('af').style.color="red";
 y=y+1;

   
}
if (theform.district.value==""||theform.district.value.length>35||(!namepattern.test(theform.district.value)))
 {
           
    document.getElementById('pointag').innerHTML="Please fill the field (alphabets).";
 
    document.getElementById('ag').style.color="red";
 y=y+1;

   
}
   
    if(document.getElementById("pcn").value!="")
   {
  
      if(document.getElementById("pcn").value<10||document.getElementById("pcn").value>10||(namepattern.test(document.getElementById("pcn").value)))
  {
     
        document.getElementById('pointak').innerHTML="Please enter the valid PAN number.(alphanumberic)";
      y=y+1;
      document.getElementById("ak").style.color="red";
   
 }
      
    }
    if(theform.vid.value!="")
{
      if(theform.vid.value<10||theform.vid.value>10||(namepattern.test(theform.vid.value)))
  {
      
        document.getElementById('pointaj').innerHTML="Please enter the valid Voter ID.(alphanumberic)";
      y=y+1;
      document.getElementById("aj").style.color="red";
   
 }
      
    }

  if(document.getElementById("eq").value == "")
   {
       
      document.getElementById('pointah').innerHTML="Please select any one.";
      y=y+1;
      document.getElementById("ah").style.color="red";
      }  if(document.getElementById("eq").value=="between 5 & 9th std")
  {
      document.getElementById("vid").value=" ";
      document.getElementById('pointak').innerHTML="";
      document.getElementById("ak").style.color="white";
        document.getElementById("pcn").value=" ";
        document.getElementById('pointaj').innerHTML="";
        document.getElementById("aj").style.color="white";
  }
  
 
      
  
  
    if((document.getElementById("s").checked===false) && (document.getElementById("m").checked===false)&& (document.getElementById("w").checked===false))
    {
        
      document.getElementById('pointai').innerHTML="Please select any one";
      y=y+1;
      document.getElementById("ai").style.color="red";
    }
    
if(document.getElementById("acn").value!="")
{
  if (document.getElementById("acn").value.length>12||document.getElementById("acn").value.length<12||(!phonepattern.test(document.getElementById("acn").value)))
 {
     
    document.getElementById('pointal').innerHTML="Please fill the valid number(number).";
 
    document.getElementById('al').style.color="red";
 
y=y+1;}}
 if(y==0)
 {
        return confirm("Do you want to submit the form?");
   
 }
  return false;
}

 
 /*function confirmreset()
 {
  if(confirm("Do you want to reset the form"))
{
 document.getElementById('pointfn').innerHTML="";
document.getElementById('pointemail').innerHTML="";
 document.getElementById('pointsn').innerHTML="";
document.getElementById('pointmn').innerHTML="";
 
 
 
 return true;
}
else
 return false;
 }*/

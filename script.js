function phone(){
    let a=document.getElementById("phonenumberid").value
    let index=0
    let result=""
    let count=0
    if(a[0]=='+'){
        result+='+'
        index+=1
        count=1
    }
    for(let i=0;i<15;i++)
        if(a[i]>='0'&&a[i]<='9')
            count++;
    for(let i=0;i<15;i++){
        if(index<count){
            if(i==1) result+='('
            if(i==4) result+=')'
            else if(i==8||i==11) result+='-'
            else{result=result+a[index]; index+=1}
        }
    }
    //result=a[0]+'('+a[1]+a[2]+a[3]+')'+a[4]+a[5]+a[6]+'-'+a[7]+a[8]+'-'+a[9]+a[10]
    document.getElementById("phone").innerText=result
}

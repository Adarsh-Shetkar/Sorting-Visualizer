async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".box");
    // color
    ele[0].childNodes[1].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].childNodes[1].style.height;
        let keyval=ele[i].childNodes[0].innerText
        // color
        ele[i].childNodes[1].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].childNodes[1].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].childNodes[1].style.background = 'blue';
            ele[j + 1].childNodes[1].style.height = ele[j].childNodes[1].style.height;
            ele[j+1].childNodes[0].innerText=ele[j].childNodes[0].innerText
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].childNodes[1].style.background = 'green';
            }
        }//swap
        ele[j + 1].childNodes[1].style.height = key;
        ele[j+1].childNodes[0].innerText=keyval
        // color
        ele[i].childNodes[1].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
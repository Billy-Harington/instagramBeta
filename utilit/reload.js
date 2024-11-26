export function reload(arr, arr_2, component, place) {
    place.innerHTML = "";

    const combinedArray = [...arr, ...arr_2]; // Объединяем массивы с помощью оператора spread

    for (const elem of combinedArray) {
        console.log(elem); 
        const item = component(elem);
        place.append(item);
    }
}

export const getImageNum = (index: number) => {

    let num = 1;

    if (index === 0) {
        num = 1;
    } else if (index === 1) {
        num = 2;
    } else if (index === 2) {
        num = 3;
    } else if (index % 3 === 0) {
        num = 1;
    } else if (index % 3 === 1) {
        num = 2;
    } else if (index % 3 === 2) {
        num = 3;
    }

    return num;
}
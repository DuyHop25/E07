/**
 * Kiểm tra một person hợp lệ
 * @param person đối tượng người dùng định nghĩa 
 * @returns kiểm tra person hợp lệ
 */
function hopLe(person: any) {
    if (person.name == '')
        return false;
    if (person.yearOfBirth <= 0 || person.yearOfBirth > 2023)
        return false;
    return true;
}

/**
 * Khai báo một person và cho biết person hợp lệ hay không
 */
function main() {
    // Khai báo đối tượng person
    const person = {
        name: 'Trương Duy Hợp',
        yearOfBirth: 2003,
    }
    if (hopLe(person) == true)
        console.log('person hop le');
    else
        console.log('person khong hop le');
}
main();
let flag: boolean = true ;  // Đặt cờ đúng nếu người này ở thành phố HCM

/**
 * Hàm khai báo một đối tượng địa chỉ
 * @returns địa chỉ người dùng nhập
 */
function info_address() :any{

	const address = {
		soNha        : "1/21",
		duong        : "Nguyễn Văn Dung",
		phuong       : "6",
		Quan_huyen   : "Gò Vấp",
		Tinh_Thanhpho: "HCM",
	}
	
	return address;
}

/**
 * Hàm kiểm tra Tỉnh - thành phố hợp lệ
 * @param p Địa chỉ người dùng nhập
 * @returns Kết quả kiểm tra tỉnh - Thành phố hợp lệ
 */
function hopLe(p:any) : boolean{

	if(p != "HCM")
		flag = false;
    
    return flag;
}


/**
 * Hàm khai báo đối tượng person và In ra kết quả người này có ở thành phố "HCM" không
 */
function main() :void{

    const person :any= {
        name: 'Trương Duy Hợp',
        yearOfBirth: 2003,
		address: info_address(),
    }
    
    console.log(person); // In ra thông tin của person

    // p có giá trị là thuộc tính Tỉnh_Thành phố của Đối tượng address, address là thuộc tính của đối tượng person
    let p = person.address.Tinh_Thanhpho;  

    const result = hopLe(p); // truyền địa chỉ(Tỉnh_Thành Phố) của person vào hàm kiểm tra hợp lệ

    // Kiểm tra biến cờ và xuất kết quả
    if ( result == true)
        console.log("Người này ở Thành phố Hồ Chí Minh");
    else
        console.log("Người này không ở Thành phố Hồ Chí Minh");
}
main();

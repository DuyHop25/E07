import { question } from "readline-sync";
/**
 * Hàm nhập tên
 * @returns tên người dùng nhập
 */
function nhapTen(): string{

	let ten: string;

	do {
		ten = question("Nhap ten: ");

		if (ten.length == 0) 
            console.log('Vui long khong nhap chuoi rong');

	} while (ten.length == 0);

	return ten;
	
}

/**
 * Hàm nhập năm sinh
 * @returns Năm sinh người dùng nhập
 */
function nhapNamsinh(): number{	

	let namSinh: number;

	do {
		namSinh = Number(question("Nhap nam sinh: "));

		if (namSinh <= 0 || namSinh > 2023)
            console.log('Vui long nhap nam sinh hop le');
		
	} while (namSinh <= 0 || namSinh > 2023);

	return namSinh;
}

/**
 * In ra lời chào và thông tin của người dùng
 * @param ten tên người dùng nhập
 * @param namSinh Năm sinh người dùng nhập
 * @returns tuổi của người dùng
 */
function xinChao(ten: string, namSinh: number): number {
	console.log(`Xin chào, mình tên là ${ten}.`);
    console.log(`Mình sinh năm ${namSinh} nha.`);
    console.log('Rất vui được gặp bạn.');

    const tuoi = 2022 - namSinh

    return tuoi
}


/**
 * Thực hiện chức năng hàm xin chào
 */
function cnXinChao(): void {
    const t = nhapTen()
    const n = nhapNamsinh()

    const person = {
        name: t,
        yearOfBirth: n
    };

    xinChao(t, n);
};

cnXinChao();

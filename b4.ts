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
function xinChao(person: any): number{

	console.log(`Xin chào, mình tên là ${person.name}.`);
    console.log(`Mình sinh năm ${person.dateOfBirth} nha.`);
    console.log('Rất vui được gặp bạn.');

	const tuoi = 2022 - person.dateOfBirth;

	console.log(`Mình ${tuoi} tuổi.`);
	
    return tuoi;
}



/**
 * Hàm định nghĩa một person
 * @returns Một đối tượng person người dùng định nghĩa
 */
function nhapThongtin() :any{

	const person = {
		name :'',
		dateOfBirth: 0,
	}

	person.name = nhapTen();

	person.dateOfBirth = nhapNamsinh();

	return person;
}



/**
 *	Chức năng hàm xin chào và nhập thông tin
 */
function cnXinChao(): void{
	
   const p = nhapThongtin();

   xinChao(p);
}

cnXinChao();


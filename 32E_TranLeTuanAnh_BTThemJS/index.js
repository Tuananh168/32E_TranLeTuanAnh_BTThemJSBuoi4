// Bài tập 4 : Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

// Input : day , month , year : number ;
// Output : ngày hôm qua , ngày mai : number ;

// progress :
//  B1 : khai báo số ngày trong từng tháng 
//  B2 : Chọn ra những ngày đặc biệt xử lý trước ( ngày 1/1 ,31/12 xử lý tăng giảm => --year , ++year)
// B3 :xử lý Những ngày đầu tháng và cuối tháng trong năm ( day = số ngày trong tháng)
// B4 : Xử lý những ngày trong tháng không thuộc trường hợp trên ( ++day , --day)

document.getElementById('ngayHomQua').onclick = function() {
    var day = Number(document.getElementById('nhapNgay').value);
    var month = Number(document.getElementById('nhapThang').value);
    var year = Number(document.getElementById('nhapNam').value);

    // Khai báo số ngày trong tháng :

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                soNgayTrongThang = 31;
            };
            break;
        case 2:
            {
                soNgayTrongThang = 28;
            };
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                soNgayTrongThang = 30;
            };
            break;
    }


    var newDay = 0;
    var newMonth = 0;
    var newYear = 0;

    if (day == 1 && month == 1 && year != 0) {
        newYear = --year;
        newMonth = 12;
        newDay = soNgayTrongThang;
    } else if (day == 1 && month != 1 && month > 0 && month <= 12) {
        newYear = year;
        newMonth = --month;
        switch (newMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                {
                    soNgayTrongThang = 31;
                };
                break;
            case 2:
                {
                    soNgayTrongThang = 28;
                };
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                {
                    soNgayTrongThang = 30;
                };
                break;
        }
        newDay = soNgayTrongThang;

    } else if (day != 1 && day <= soNgayTrongThang && day > 0 && month > 0 && month <= 12) {
        newYear = year;
        newMonth = month;
        newDay = --day;
    } else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }

    document.getElementById('ketQua_b5').innerHTML = newDay + '/' + newMonth + '/' + newYear;

}


document.getElementById('ngayMai').onclick = function() {
    var day = Number(document.getElementById('nhapNgay').value);
    var month = Number(document.getElementById('nhapThang').value);
    var year = Number(document.getElementById('nhapNam').value);

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                soNgayTrongThang = 31;
            };
            break;
        case 2:
            {
                soNgayTrongThang = 28;
            };
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                soNgayTrongThang = 30;
            };
            break;
    }

    var newDay = 0;
    var newMonth = 0;
    var newYear = 0;

    if (day == soNgayTrongThang && month == 12 && year > 0) {
        newDay = 1;
        newMonth = 1;
        newYear = ++year
    } else if (day == soNgayTrongThang && month < 12 && month > 0 && year > 0) {
        newDay = 1;
        newMonth = ++month;
        newYear = year;
    } else if (day > 0 && day < soNgayTrongThang && month > 0 && month <= 12 && year > 0) {
        newDay = ++day;
        newMonth = month;
        newYear = year;
    } else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }
    document.getElementById('ketQua_b5').innerHTML = newDay + '/' + newMonth + '/' + newYear;


}

// Bài Tập 6 :Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).

// input : month , year : number;
// Output : Số ngày của tháng đó . 

// progress : dùng switch..case khai báo ngày từng tháng (tháng 2 có 28 ngày)
// + Xử lý năm nhuận : ( đk : năm chia hết cho 4 || các năm thế kỉ có 2 số 0 (1600,1700,1800,...) chia hết cho 400) ( Dùng hàm if cho đk này )

document.getElementById('btnTinhNgay').onclick = function() {
    var month = Number(document.getElementById('month').value);
    var year = Number(document.getElementById('year').value);

    var soNgayTrongThang = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                soNgayTrongThang = 31;
            };
            break;
        case 2:
            {
                soNgayTrongThang = 28;
            };
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                soNgayTrongThang = 30;
            };
            break;
    }

    if (month == 2 && year % 4 == 0 && year % 100 != 0 || month == 2 && year % 400 == 0) {
        soNgayTrongThang = 29;
    }

    document.getElementById('ketQua_b6').innerHTML = ' Tháng ' + month + ' năm ' + year + ' có ' + soNgayTrongThang + ' ngày ';
}

// Bài Tập 7 : Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.

// input : Số có 3 chữ số
// output : Cách đọc : string;

// progress : Tách lấy hàng trăm , hàng chục , hàng đơn vị ...

document.getElementById('btnDocSo').onclick = function() {
    var iSo = Number(document.getElementById('nhapSo_7').value);

    var hangTram = 0;
    var hangChuc = 0;
    var hangDonVi = 0;

    hangTram = Math.floor(iSo / 100);
    hangChuc = Math.floor(iSo / 10) % 10;
    hangDonVi = iSo % 10;

    if (hangTram > 0 && hangChuc > 0 && hangDonVi > 0) {
        hangTram = hangTram + ' trăm ';
        hangChuc = hangChuc + ' mươi '
    } else if (hangTram == 0 && hangChuc > 0 && hangDonVi > 0) {
        hangTram = '';
        hangChuc = hangChuc + ' mươi ';
    } else if (hangTram > 0 && hangChuc == 0 && hangDonVi > 0) {
        hangTram = hangTram + ' trăm ';
        hangChuc = ' lẻ '
    } else if (hangTram > 0 && hangChuc > 0 && hangDonVi == 0) {
        hangTram = hangTram + ' trăm '
        hangChuc = hangChuc + ' mươi ';
        hangDonVi = '';
    } else if (hangTram == 0 && hangChuc == 0 && hangDonVi > 0) {
        hangTram = '';
        hangChuc = '';
    } else if (hangTram > 0 && hangChuc == 0 && hangDonVi == 0) {
        hangTram = hangTram + ' trăm ';
        hangChuc = '';
        hangDonVi = '';
    } else if (hangTram == 0 && hangChuc > 1 && hangDonVi == 0) {
        hangTram = '';
        hangChuc = hangChuc + ' mươi ';
        hangDonVi = '';
    } else if (hangTram == 0 && hangChuc == 1 && hangDonVi == 0) {
        hangTram = '';
        hangChuc = 'mười';
        hangDonVi = '';
    } else {
        hangTram = 'Không thể đọc!';
        hangChuc = '';
        hangDonVi = '';
    }

    document.getElementById('ketQua_b7').innerHTML = hangTram + hangChuc + hangDonVi;
}

// Bài tập 8 :Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.

// Input : họ tên học sinh : string , tọa độ (x,y) : number
// output : Học sinh xa nhất : string;

// progress : tính d của từng học sinh đến trường theo công thức d = math.sqrt((x*x)+(y*y))
// So sánh từng trường hợp d1 , d2 , d3 : 
// Ví dụ : d1 > d2 > d3 => d1 xa nhất => bạn a xa trường nhất.


document.getElementById('btnTim').onclick = function() {
    var hoTen_hs1 = document.getElementById('nhapTen_hs1').value;
    var toaDoX_hs1 = Number(document.getElementById('toaDoX_hs1').value);
    var toaDoY_hs1 = Number(document.getElementById('toaDoY_hs1').value);
    var hoTen_hs2 = document.getElementById('nhapTen_hs2').value;
    var toaDoX_hs2 = Number(document.getElementById('toaDoX_hs2').value);
    var toaDoY_hs2 = Number(document.getElementById('toaDoY_hs2').value);
    var hoTen_hs3 = document.getElementById('nhapTen_hs3').value;
    var toaDoX_hs3 = Number(document.getElementById('toaDoX_hs3').value);
    var toaDoY_hs3 = Number(document.getElementById('toaDoY_hs3').value);
    var toaDoXth = Number(document.getElementById('toaDoX_th').value)
    var toaDoYth = Number(document.getElementById('toaDoY_th').value)

    var x_hs1 = toaDoX_hs1 - toaDoXth;
    var y_hs1 = toaDoY_hs1 - toaDoYth;

    var x_hs2 = toaDoX_hs2 - toaDoXth;
    var y_hs2 = toaDoY_hs2 - toaDoYth;

    var x_hs3 = toaDoX_hs3 - toaDoXth;
    var y_hs3 = toaDoY_hs3 - toaDoYth;



    var d_hs1 = Math.sqrt((x_hs1) * (x_hs1) + (y_hs1) * (y_hs1));
    var d_hs2 = Math.sqrt((x_hs2) * (x_hs2) + (y_hs2) * (y_hs2));
    var d_hs3 = Math.sqrt((x_hs3) * (x_hs3) + (y_hs3) * (y_hs3));

    var text = '';
    var hoTen = '';


    if (d_hs1 > d_hs2 && d_hs1 > d_hs3) {
        text = 'Học sinh xa trường nhất là : '
        hoTen = hoTen_hs1;
    } else if (d_hs1 < d_hs2 && d_hs2 == d_hs3) {
        text = 'Học sinh xa trường nhất là : '
        hoTen = hoTen_hs2 + ' và ' + hoTen_hs3;
    } else if (d_hs2 > d_hs1 && d_hs2 > d_hs3) {
        text = 'Học sinh xa trường nhất là : '
        hoTen = hoTen_hs2;
    } else if (d_hs2 < d_hs1 && d_hs1 == d_hs3) {
        text = 'Học sinh xa trường nhất là : '
        hoTen = hoTen_hs1 + ' và ' + hoTen_hs3;
    } else if (d_hs3 > d_hs1 && d_hs3 > d_hs2) {
        text = 'Học sinh xa trường nhất là : '
        hoTen = hoTen_hs3;
    } else if (d_hs3 < d_hs1 && d_hs1 == d_hs2) {
        text = 'Học sinh xa trường nhất là : ';
        hoTen = hoTen_hs1 + ' và ' + hoTen_hs2;
    } else {
        text = '3 học sinh bằng nhau!';
        hoTen = '';
    }
    document.getElementById('ketQua_b8').innerHTML = text + hoTen;
}
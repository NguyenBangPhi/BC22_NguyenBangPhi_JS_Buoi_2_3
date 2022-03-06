/**
 * DOM
 */

// var username = document.getElementById("txtUsername").value;

// console.log(username);

document.getElementById("btnLogin").onclick = function (){
    var username = document.getElementById("txtUsername").value;
    console.log(username);
    var password = document.getElementById("txtPassword").value;
    console.log(password);
    var ketQua = "Username la: " + username + "<br/> Password la: " + password;
    // document.getElementById("footerLogin").innerText = "Tài khoản là: " + username + ";Mật khẩu là: " + password;
    document.getElementById("footerLogin").innerHTML = ketQua;

};

/**
 * Cong 2 so
 */



document.getElementById("btnCong").onclick = function(){
    var number1 = document.getElementById("txtNumber_1").value * 1;
    var number2 = document.getElementById("txtNumber_2").value * 1;
    
    // Chuyen kieu du lieu tu string => number
    // number1 = parseInt(number1);
    // number2 = parseInt(number2);

    // var tong = +(number1) + +(number2);
    // console.log(tong);
    // var tong2 = Number.parseInt(number1) + Number.parseInt(number2);
    // console.log(tong2);

    var tong = number1 + number2;
    var ketQuaTong = "Tong la: " + tong;
    console.log(ketQuaTong);

    //Gắn ketQuaTong ra thẻ div#thongBao
    document.getElementById("thongBao").innerHTML = ketQuaTong;

    //Style inline cho thẻ div#thongBao
    // document.getElementById("thongBao").style.color = "white";
    // document.getElementById("thongBao").style.backgroundColor = "red";
    // document.getElementById("thongBao").style.fontSize = "30px";
    // document.getElementById("thongBao").style.textAlign = "center";
    
    //Style add class cho thẻ div#thongBao
    // document.getElementById("thongBao").className = "showInfo";
    document.getElementById("thongBao").classList.add("showInfo");
}

document.getElementById("btnOff").onclick = function (){
    document.getElementById("imgPic").src = "./images/pic_bulboff.gif";
}
document.getElementById("btnOn").onclick = function (){
    document.getElementById("imgPic").src = "./images/pic_bulbon.gif";
}

document.getElementById("btnDisableBtnOn").onclick = function (){
    //Khóa nút On
    document.getElementById("btnOn").disabled = true;
    
}
document.getElementById("enableBtnOn").onclick = function (){
    //Khóa nút On
    document.getElementById("btnOn").disabled = false;
    
}



// Tính tiền típ
/**
 * Đầu vào : 
 * - Tổng tiền thanh toán
 * - Phần trăm típ
 * - so lượng người chia
 * Xử lí:
 * 100 => 100 * 30/100 / 3 => 10
 * tongTienThanhToan * phanTramTip/100 / soLuongNguoiChia
 */

document.getElementById("btnTinh").onclick = function(){
    var tongTienThanhToan = document.getElementById("txtTongTien").value;
    var phanTramTip = document.getElementById("phanTramTip").value;
    var soLuongNguoiChia  = document.getElementById("soNguoi").value;
    console.log(tongTienThanhToan);
    console.log(phanTramTip);
    console.log(soLuongNguoiChia);
    var total = tongTienThanhToan * phanTramTip/100 / soLuongNguoiChia;
    // var ketqua = "Mỗi người típ " + total + "$";
    // var ketqua = "<div>Mỗi người típ "+ total.toFixed(2) +"$</div>"

    var ketqua = "<div>Mỗi người típ: ";
    ketqua += total + "$ ";
    ketqua += " </div>"; 

    document.getElementById("footerTienTip").innerHTML = ketqua;
}


document.getElementById("btnCreateP").onclick = function(){
    // tạo thẻ p
    // var tagP = "<p>Hello World</p>";
    // document.getElementById("divContent").innerHTML = tagP;

    //clear content của thẻ div
    document.getElementById("divContent").innerHTML = "";

    var tagP = document.createElement("p");
    tagP.innerHTML = "Hello World";
    document.getElementById("divContent").appendChild(tagP);
    
}

document.getElementById("btnTinhTuThien").onclick = function(){
    var tenPhim = document.getElementById("txtTenPhim").value;

    var gvNguoiLon = document.getElementById("txtVeNguoiLon").value;
    var gvTreEm = document.getElementById("txtVeTreEm").value;
    var slNguoiLon = document.getElementById("txtSoLuongNguoiLon").value;
    var slTreEm = document.getElementById("txtSoLuongTreEm").value;
    var tongSLVe = +(slNguoiLon) + +(slTreEm);
    // var tongVeBanDuoc = parseInt(document.getElementById("txtSoLuongNguoiLon").value) + parseInt(document.getElementById("txtSoLuongTreEm").value);
    // var tongDoanhThu = (parseInt(document.getElementById("txtVeNguoiLon").value)*parseInt(document.getElementById("txtSoLuongNguoiLon").value));
    // tongDoanhThu += parseInt(document.getElementById("txtVeTreEm").value*document.getElementById("txtSoLuongTreEm").value);
    // var tienTuThien = tongDoanhThu * parseInt(document.getElementById("phanTramTuThien").value) / 100;
    // var tienConLai = tongDoanhThu - tienTuThien;

//Xử lí
    //Tính doanh thu
    var doanhThu = (gvNguoiLon * slNguoiLon) + (gvTreEm * slTreEm);

    //Tính từ thiện
    var tuThien = (doanhThu * 10) / 100;

    //Tính lợi nhuận
    var loiNhuan = doanhThu - tuThien;

    //FOrmat vnd
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienVnd = currentFormat.format(loiNhuan);

    var ketqua = "<div class='alert alert-success'>";
    ketqua += "<p>Tên phim: "+ tenPhim+"</p>";
    ketqua += "<p>Số vé đã bán: "+ tongSLVe+"</p>";
    ketqua += "<p>Doanh Thu: "+ currentFormat.format(doanhThu)+" </p>";
    ketqua += "<p>Trích % từ thiện 10%</p>";
    ketqua += "<p>Tổng tiền trích từ thiện: "+ currentFormat.format(tuThien)+"</p>";
    ketqua += "<p>Lợi nhuận: "+tienVnd+"</p>";
    ketqua += "</div>";

    

    document.getElementById("footerTuThien").innerHTML = ketqua;
    // console.log(tongVeBanDuoc);
    // console.log(tongDoanhThu);
    // console.log(tienTuThien);
    // console.log(tienConLai);
}


///Tính tiền lương nhân viên
document.getElementById("btnTinhLuongNV").onclick = function(){
    //Đầu vào
    const LUONG = 100000;
    var soNgayLam = document.getElementById("txtSoNgayLam").value;
    //Xử lí
    var tongTienLuong = document.getElementById("txtSoNgayLam").value * 100000;
    
    var currentFormat = new Intl.NumberFormat('vn-VN');
    
    var ketqua = "<div> Số lương trong ";
    ketqua += soNgayLam + " ngày ";
    ketqua += "là " + currentFormat.format(tongTienLuong);
    ketqua += " </div>";
    document.getElementById("footerTinhLuongNV").innerHTML =ketqua;
}

//Tính giá trị trung bình của 5 số
document.getElementById("btnTinhTB").onclick = function(){
    var so_1 = document.getElementById("txtSoThuNhat").value *1;
    var so_2 = document.getElementById("txtSoThuHai").value * 1;
    var so_3 = document.getElementById("txtSoThuBa").value * 1;
    var so_4 = document.getElementById("txtSoThuTu").value * 1;
    var so_5 = document.getElementById("txtSoThuNam").value * 1;
    var ketqua = (so_1 + so_2 + so_3 + so_4 + so_5) / 5;
    document.getElementById("footerTinhTB").innerHTML = "<p>Kết quả là: "+ ketqua+" </p>";
}

document.getElementById("btnTinhUSD").onclick = function () {
    const TI_GIA = 23500;
    var usd = document.getElementById("txtSoUSD").value;
    var ketqua = usd * TI_GIA;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    document.getElementById("footerTinhUSD").innerHTML = "<p>Tiền VND sau khi đổi là: " + currentFormat.format(ketqua)+"</p>"
}

document.getElementById("btnTinhHCN").onclick = function(){
    var cd = document.getElementById("txtChieuDai").value * 1;
    var cr = document.getElementById("txtChieuRong").value * 1;
    var dt = cd*cr;
    var cv = (cd+cr)*2;
    
    var ketqua = "<p>";
    ketqua += "Diện tích: "+dt;
    ketqua += "; Chu vi: " + cv;
    ketqua += "</p>";
    document.getElementById("footerTinhHCN").innerHTML = ketqua;
}

document.getElementById("btnTinhKySo").onclick = function (){
    var kySo = document.getElementById("txtKySo").value *1;
    var hangDonVi = Math.floor(kySo % 10);
    var hangChuc =Math.floor(kySo / 10) ;

    var ketqua = hangDonVi + hangChuc;
    document.getElementById("footerTinhKySo").innerHTML = "Kết quả là: " + ketqua;
}
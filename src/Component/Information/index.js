import React from 'react'

export default function Information() {
    return (
       <section className="information">
  <div className="information__content">
    <p>Thông tin bệnh nhân</p>
    <p>Họ và tên: <span>Trần Thị Hồng Nhân</span></p>
  </div>
  <div className="information__item">
    <p>Giới tính: <span>Nữ</span></p>
    <p>Năm sinh: <span>1965</span></p> 
  </div>
  <div className="information__item1">
    <p>Bác sĩ chỉ đinh: <span /></p>
    <p>Nơi gửi: <span /></p>
  </div>
  <div className="information__Result">
    <div className="information__ALT">
      <p>Kết quả : <span>Đo hoạt độ ALT(GPT)</span></p>
      <a href="#">Xem chi tiết </a>
    </div>
  </div>
  <div className="information__table">   
    <table className="table">
      <thead className="table__thead">
        <tr>
          <th />
          <th>Tên xét nghiệm </th>
          <th>Kết quả </th>
          <th>Đơn vị</th>
          <th>Chỉ số bình thường</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        <tr>
          <td>1</td>
          <td>ALT(SGPT) +</td>
          <td>27</td>
          <td>U/L</td>
          <td>(5 - 49)</td>
        </tr>
      </tbody>
    </table>
    <div className="table__none">
      <div className="table__flex">
        <p>1. Tên xét nghiệm: <span>ALT(SGPT) +</span> </p>
      </div>
      <div className="information__item">
        <p>Kết quả: <span>27</span></p>
        <p>Đơn vị: <span>U/L</span></p> 
      </div>
      <div className="table__flex">
        <p>Chỉ số bình thường: <span>(5 - 49)</span> </p>
      </div>
    </div>
  </div>
  <div className="information__Result">
    <div className="information__ALT">
      <p>Kết quả : <span>Định lượng Glucose</span></p>
      <a href="#">Xem chi tiết </a>
    </div>
  </div>
  <div className="information__Result">
    <div className="information__ALT">
      <p>Kết quả : <span>Tổng phân tích nước tuyển <span className="block">(Bằng máy tự động)</span></span></p>
      <a href="#">Xem chi tiết </a>
    </div>
  </div>
</section>

    )
}

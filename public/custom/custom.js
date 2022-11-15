
      // get data
      readdata();

      function readdata() {
        $.ajax({
          type: "get",
          data: "",
          url: "getdata.php",
          success: function (result) {
            let data = JSON.parse(result);
            let tabeldata = $(".komentar-data");
            let datatabel = ""

            $.each(data, function (key, val) {
              datatabel +=
              `<div class="card mb-3">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-lg-2 mb-3 mb-lg-0">
                            <div class="comment-profile m-auto m-lg-0">
                              <img src="./public/image/Ellipse 1.png" alt="">  
                            </div>
                          </div>
                          <div class="col-lg-10">
                            <label class="comment-name d-block text-center text-lg-start" for="">`+val.nama+`</label>
                            <div class="text-center text-lg-start mb-3">
                              <span class="btn btn-sm btn-hadir text-center">
                              <i class="iconify" data-icon="akar-icons:circle-check-fill" style="color: white;"></i>
                              `+val.kehadiran+`
                            </span>
                            </div>
                            <p class="comment-desc">`+val.ucapan+`</p>
                          </div>
                        </div>
                      </div>
                    </div>`
                  })
            tabeldata.html(datatabel);
          },
        });
      };

      function tambahdata(e){
        e.preventDefault();
        let nama = $("#nama").val();
        let ucapan = $("#ucapan").val();
        let hadir = $("#kehadiran").val();
  
        if(nama == "" || ucapan == ""){
          console.log("hai")

          $("#mohon").modal("show");
        }else{
          $.ajax({
            url:"add.php",
            type:"post",
            data:{
              nama: nama,
              ucapan: ucapan,
              kehadiran: hadir,
            },
            success : function(result){
              readdata();
              $("#nama").val("")
              $("#ucapan").val("")
              $("#terimakasi").modal("show");   
            }
            
          });
        }
        
      };
   
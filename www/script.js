$(function(){ 
  $('#bt-ajax').click(function(){ 
    $.ajax({ 
      method: 'post', 
      url: 'http://localhost/list/', 
      type: 'json' 
    }).done(function(result){ 
      result = JSON.parse(result); 
      console.log(result); 
      var isi = "Nama : "+ result.nama+"<br>"; 
      isi += "Negara : "+ result.negara+"<br>"; 
      isi += "Jumlah Club : "+ result.jumlah_club+"<br>";
      isi += "Kasta Liga : "+ result.kasta+"<br>";
      isi += "Federasi : "+ result.federasi+"<br>"; 
      $('#content').html(isi); 
    }); 
  }); 
}); 
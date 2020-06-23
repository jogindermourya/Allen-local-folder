<style>
	.button-popup{
		z-index: 99999 !important;
		width: 30px !important;
		height: 30px !important;
		background: #000 !important;
		border: 2px solid #fff;
		border-radius: 100px;
		color: #fff !important;
		box-shadow: 0 0 10px #000;
		
	}

	.poupimg{

		position: relative; 
		width: 100%;
	
	}
	.poupimg img {    width: 100%;
    border-radius: 10px;
    border: 2px solid #fff;}
    
        .pop {max-width:320px!important; margin: 20px auto;}
    


    
    
</style>



<div class="modal fade bs-example-modal-sm6" id="myModal-tx" tabindex="-1" role="dia1log" aria-labelledby="mySmallModalLabel" aria-hidden="true" >
	  <div class="modal-dialog modal-md pop6" style="position: relative !important;">
		<div class="poupimg">
			<!--#include virtual="/popup/popup-links.asp"-->
			<button aria-hidden="true" data-dismiss="modal" class=" button-popup" type="button" style="position: absolute; top: -5px; right: -5px; z-index: 99999;"><i class="fa fa-times" aria-hidden="true" ></i></button>
		</div>
	  </div>
</div>
	
	
		<script>
				//alert(center);
			
				//----Get AHEMDABAD DATE---------------
				if(center == 'ahmedabad' ){
					$('#myModal-tx').modal('show');
                    $('#popup-ahmedabad').show();
				}			
				//----Get Bengaluru DATE---------------
				else if(center == 'bengaluru'){
					$('#myModal-tx').modal('show');
					$('#popup-bengaluru').show();
				}		
				//----Get Bhilwara DATE---------------
				else if(center == 'bhilwara'){
					$('#myModal-tx').modal('show');
					$('#popup-bhilwara').show();
				}		
				//----Get Bhubaneswar DATE---------------
				else if(center == 'bhubaneswar'){
					$('#myModal-tx').modal('show');
					$('#popup-bhubaneswar').show();
				}		
				//----Get chennai DATE---------------
				else if(center == 'chennai'){
					$('#myModal-tx').modal('show');
					$('#popup-chennai').show();
				}			
				//----Get Chandigarh DATE---------------
				else if(center == 'chandigarh'){
					$('#myModal-tx').modal('show');
					$('#popup-chandigarh').show();
				}		
				//----Get guwahati DATE---------------
				else if(center == 'guwahati'){
					$('#myModal-tx').modal('show');
					$('#popup-guwahati').show();
				}			
				//----Get Mysuru  DATE---------------
				else if(center == 'mysuru'){
					$('#myModal-tx').modal('show');
					$('#popup-mysuru').show();
				}			
				//----Get indore DATE---------------
				else if(center == 'indore'){
					$('#myModal-tx').modal('show');
					$('#popup-indore').show();
				}			
				//----Get KOCHI DATE---------------
				else if(center == 'kochi'){
					$('#myModal-tx').modal('show');
					$('#popup-kochi').show();
				}		
				//----Get KOTA DATE---------------
				else if(center == 'kota'){
					$('#myModal-tx').modal('show');
					$('#popup-kota').show();
				}		
				//----Get KOTA PNCF---------------
				else if(center == 'pncf_kota'){
					$('#myModal-tx').modal('show');
					$('#popup_pncf_kota').show();
				}		
				//----Get MUMBAI DATE---------------
				else if(center == 'mumbai'){
					$('#myModal-tx').modal('show');
					$('#popup-mumbai').show();
				}		
				//----Get Nagpur DATE---------------
				else if(center == 'nagpur'){
					$('#myModal-tx').modal('show');
					$('#popup-nagpur').show();
				}		
				//----Get Pune DATE---------------
				else if(center == 'pune'){
					$('#myModal-tx').modal('show');
					$('#popup-pune').show();
				}		
				//----Get rajkot DATE---------------
				else if(center == 'rajkot'){
					$('#myModal-tx').modal('show');
					$('#popup-rajkot').show();
				}	
				//----Get Sikar DATE---------------
				else if(center == 'sikar'){
					$('#myModal-tx').modal('show');
					$('#popup-sikar').show();
				}		
				//----Get AHEMDABAD DATE-----------
				else if(center == 'surat'){
					$('#myModal-tx').modal('show');
					$('#popup-surat').show();
				}		
				//----Get ujjain DATE---------------
				else if(center == 'ujjain'){
					$('#myModal-tx').modal('show');
					$('#popup-ujjain').show();
				}		
				//----Get vadodara DATE-------------
				else if(center == 'vadodara'){
					$('#myModal-tx').modal('show');
					$('#popup-vadodara').show();
				}		
	</script>

	

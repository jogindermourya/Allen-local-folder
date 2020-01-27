<!--Header-->
<!-- #Include virtual="include/header.asp" -->
<!--/Header-->

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Login</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/">Home</a></li>
				<li>How to Apply</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->

<!--  content Section -->



<section class="login_area">
	<div class="container">
		<div class="row">
			<div class="col-lg-7">
				<div class="login_info">

					<div class="text-center mb-5">
						<h2 class="f_p f_700 f_size_30 t_color3 mb_10">Welcome to </h2>
						<p class="f_p f_400 f_size_15">User Login for Session (2019-20)</p>
					</div>

					<form action="#" class="login-form   mr-lg-5 ml-lg-5  mr-sm-1 needs-validation" novalidate>
						<div class="col-lg-12 mb-3 form-group text_box">
							<label for="validateEmail">Email ID</label>
							<input type="email" class="form-control"  id="validateEmail" aria-describedby="emailHelp" required>
							<div class="invalid-feedback">Enter Your Email ID.</div>
						</div>

						<div class="col-lg-12 mb-3 form-group text_box">
							<label for="validationCustom05">Password</label>
							<input type="text" class="form-control" id="validationCustom05"  required>
							<div class="invalid-feedback">Create Your Password.</div>
						</div>
						<div class="extra col-lg-12 mb-3">
							<div class="remember">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input"  class="custom-control-input" name="customCheck"
									id="invalidCheck" required>
									<label class="custom-control-label" for="invalidCheck">Remeber Me</label>
								</div>
							</div>
							
							<!--//check-box-->
							<div class="forgotten-password">
								<a href="" data-toggle="modal" data-target="#exampleModal">Forgot Password?</a>
							</div>
						</div>
						<div class="col-lg-12 mb-3 text-center"><small class="small2"><a href="" data-toggle="modal" data-target="#exampleModal2"><b>Resend Activation Email & Verification Code</b></a></small></div>
						<div class="mt-3 text-center bigbtn">
						<button type="submit" class="green_btn">Log in</button>
					</div>
						<div class="alter-login text-center mt_30 mb-3">
							Don't have an Account ? <a class="login-link" href="/apply-online/register.asp">Signup</a>
						</div>
					</form>
				</div>
			</div>


			<div class="col-lg-5 d-flex align-items-center">
				<div class="login_img">
					<img src="/assets/img/login_img.png" class="img-fluid hide" alt="">
				</div>
			</div>
		</div>
	</div>



</section>
<!-- End  content Section -->

<!-- Modal Forgot-->
<div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<form action="#" class="needs-validation" novalidate>
	  
			<div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
		  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		  </button>
		</div>
		<div class="modal-body forgotform">
		<div class="row">
			<div class="col-lg-12">
				<div class="alert error">
				<div class="alert_body f_size_14">
				<i class="icon-close"></i>
				Please Recheck your Registered Email ID and Mobile Number.
				</div>
				<div class="alert_close"><i class="fa fa-close"></i></div>
				</div>
			</div>
		  
		  
			<div class="col-lg-12">
				<div class="alert success">
					<div class="alert_body f_size_14">
						<i class="icon-check"></i>
						Password has been Sent on your Email Address.
					</div>
					<div class="alert_close"><i class="fa fa-close"></i></div>
				</div>
				</div>
				
			</div>

				<div class="form-group text_box">
					<label for="validateEmail">Registerd Email Id</label>
					<input type="email" class="form-control" id="validateEmail" aria-describedby="emailHelp" required>
					<div class="invalid-feedback">Enter Registerd Your Email ID.</div>
				</div>
				<div class="form-group text_box">
					<label for="validationmobile">Registerd Mobile No</label>
					<input type="text" class="form-control" id="validationmobile" value="" required>
					<div class="invalid-feedback">Enter Registerd Mobile Number.</div>
				</div>
			
		</div>
		<div class="modal-footer">
		  <button type="submit" class="btn btn-primary">Submit</button>
		  <button type="button" type="submit" class="btn btn-secondary" data-dismiss="modal" >Close</button>
		</div>

	  </div>
	</div>
  </div>

<!-- end Modal Forgot-->


<!-- Modal Resend activation email & verification code-->
<div class="modal fade" id="exampleModal2"  tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<form action="#" class="needs-validation" novalidate>
	  
			<div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="exampleModalLabel">Resend activation email & verification code</h5>
		  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		  </button>
		</div>
		<div class="modal-body forgotform">
		<div class="row">
			<div class="col-lg-12">
				<div class="alert error">
				<div class="alert_body f_size_14">
				<i class="icon-close"></i>
				Please Recheck your Registered Email ID and Mobile Number.
				</div>
				<div class="alert_close"><i class="fa fa-close"></i></div>
				</div>
			</div>
 			<div class="col-lg-12">
				<div class="alert success">
					<div class="alert_body f_size_14">
						<i class="icon-check"></i>
						Password has been Sent on your Email Address.
					</div>
					<div class="alert_close"><i class="fa fa-close"></i></div>
				</div>
				</div>
			</div>
				<div class="form-group text_box">
					<label for="validateEmail2">Registerd Email Id</label>
					<input type="email" class="form-control" id="validateEmail2" aria-describedby="emailHelp" required>
					<div class="valid-feedback"> Good!</div>
					<div class="invalid-feedback">Enter Registerd Your Email ID.</div>
				</div>
				<div class="form-group text_box">
					<label for="validationmobile3">Registerd Mobile No</label>
					<input type="text" class="form-control" id="validationmobile3" value="" required>
					<div class="valid-feedback"> Good!</div>
					<div class="invalid-feedback">Enter Registerd Mobile Number.</div>
				</div>
		</div>
		<div class="modal-footer">
		  <button type="submit" class="btn btn-primary">Submit</button>
		  <button type="button" type="submit" class="btn btn-secondary" data-dismiss="modal" >Close</button>
		</div>

	  </div>
	</div>
  </div>

<!-- end Modal Resend activation email & verification code-->

</form>



<!--Footer-->
<!-- #Include virtual="include/footer.asp" -->
<!--/Footer-->
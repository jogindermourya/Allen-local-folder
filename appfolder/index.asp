

           <!--start Footer -->
        <!-- #Include virtual="/appfolder/include/header_app.asp" -->
     <!--end Footer -->


      <div class="container body-content">
         <style>
            .modal-dialog {
            left: 0% !important;
            }
         </style>
         <input type="hidden" value="">
         <div class="container content">
            <div class="profile">
               <div class="row col-lg-6 col-lg-offset-3 text-center">
                  <strong> Session (2020-21)</strong>
               </div>
               <div class="row">
                  <div class="col-lg-6 col-lg-offset-3 text-center">
                     <p>Don't Have Account? Click <a href="https://www.allen.ac.in/appsmvc2021/appforms/Register"
                        class="color-green">Sign Up</a> to registration.</p>
                  </div>
                  <br><br><br>
                  <div class="col-lg-6 col-lg-offset-3 text-center">
                     <form action="www.allen.ac.in//appsmvc2021/AppForms/Login" class="sky-form" method="post"
                        role="form" novalidate="novalidate">
                        <input name="__RequestVerificationToken" type="hidden"
                           value="XJfsdCO3lWPhh7bfzNkyxxgzaljTcLf_Xb-eWZE87vKa4gojJwTFpzNFX-EzPL4LcYgHZJk6SxNhnwQwLFN07d_eQA0fbx5s-Xb1EOoLV5I1">
                        <header><i class="fa fa-sign-in"></i> Login form</header>
                        <fieldset>
                           <section>
                              <div class="row">
                                 <label class="label col col-3"><strong>E-mail</strong></label>
                                 <div class="col col-8">
                                    <label class="input">
                                    <i class="icon-append1 fa fa-user"></i>
                                    <input class="text-box single-line" data-val="true"
                                       data-val-email="The Email field is not a valid e-mail address."
                                       data-val-required="The Email field is required." id="Email"
                                       name="Email" placeholder="Type Registered Email-ID" type="email"
                                       value="">
                                    <b class="tooltip tooltip-bottom-left">Enter your Registered Email
                                    address</b>
                                    <span class="field-validation-valid text-danger" data-valmsg-for="Email"
                                       data-valmsg-replace="true"></span>
                                    </label>
                                 </div>
                              </div>
                           </section>
                           <section>
                              <div class="row">
                                 <label class="label col col-3"><strong>Password</strong></label>
                                 <div class="col col-8">
                                    <label class="input">
                                    <i class="icon-append1 fa fa-lock"></i>
                                    <input data-val="true"
                                       data-val-required="The Password field is required." id="Password"
                                       name="Password" placeholder="Type Password" type="password">
                                    <b class="tooltip tooltip-bottom-left">Enter your password</b>
                                    <span class="field-validation-valid text-danger"
                                       data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                    </label>
                                    <input type="hidden" name="channel" value="return signin_attempt()">
                                    <div class="note">
                                       <a data-modal="" class="modal-opener"
                                          href="https://www.allen.ac.in/appsmvc2021/AppForms/ForgotPWD"
                                          title="Forgot PWD">Forgot password?</a>
                                    </div>
                                    <div class="note">
                                       <a data-modal="" class="modal-opener"
                                          href="https://www.allen.ac.in/appsmvc2021/AppForms/ResendActivationEmail"
                                          title="Resend Activation Email">Resend activation email &amp;
                                       verification code</a>
                                    </div>
                                 </div>
                              </div>
                           </section>
                           <section>
                              <div class="row">
                                 <div class="col col-3"></div>
                                 <div class="col col-8 inline-group">
                                    <label class="checkbox">
                                    <input type="checkbox" id="chkRemember" checked=""
                                       name="chkRemember"><i></i>Keep me logged in
                                    </label>
                                 </div>
                              </div>
                           </section>
                        </fieldset>
                        <footer>
                           <input type="submit" class="btn-u" value="Log in">
                           <script>
                              btn.signin_attempt();
                           </script>
                           <a class="btn-u btn-u-default"
                              href="https://www.allen.ac.in/appsmvc2021/appforms/Register">Register</a>
                        </footer>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div id="myModal" class="modal fade in">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div id="myModalContent"></div>
               </div>
            </div>
         </div>
      </div>




     <!--start Footer -->
          <!-- #Include virtual="/appfolder/include/footer_app.asp" -->
     <!--end Footer -->















   
      
     

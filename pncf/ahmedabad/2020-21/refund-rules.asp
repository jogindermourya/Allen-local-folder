
<!-- #Include virtual="/pncf/ahmedabad/include/header.asp" -->


<link rel="stylesheet" href="/assets/vendors/data-table/css/datatables.min.css">

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Refund Rules</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/pncf/ahmedabad">Home</a></li>
				<li>Refund Rules</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->

<!--  content Section -->

<!--#include virtual="/pncf/common/refund-rule/refund-rules.asp"-->


<!-- End  content Section -->

<!--Footer-->
<!--#include virtual="/pncf/ahmedabad/include/footer.asp"-->
<!--/Footer-->
<script type="text/javascript">
	
	$(document).ready(function () {
		var refund = ahmedabad_pncf_refundProcess;
		refundProcess(refund, $);

		var sprefund = ahmedabad_pncf_specialRefund;
		specialRefund(sprefund, $);

		var important = ahmedabad_pncf_importantPoints;
		importantPoints(important, $);

		var rules = ahmedabad_pncf_refundRules;
		refundRules(rules, $);

		var service = ahmedabad_pncf_changes;
		changes(service, $);
	});
	
</script>

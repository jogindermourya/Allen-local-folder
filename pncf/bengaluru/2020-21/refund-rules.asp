
<!--#include virtual="/pncf/bengaluru/include/header.asp"-->


<link rel="stylesheet" href="/assets/vendors/data-table/css/datatables.min.css">

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Refund Rules</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/pncf/bengaluru">Home</a></li>
				<li>Refund Rules</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->
<!-- #Include virtual="/pncf/common/refund-rule/refund-rules.asp" -->

<!--Footer-->
<!--#include virtual="/pncf/bengaluru/include/footer.asp"-->
<!--/Footer-->
<script type="text/javascript">
	
	$(document).ready(function () {
		var refund = bengaluru_pncf_refundProcess;
		refundProcess(refund, $);

		var sprefund = bengaluru_pncf_specialRefund;
		specialRefund(sprefund, $);

		var important = bengaluru_pncf_importantPoints;
		importantPoints(important, $);

		var rules = bengaluru_pncf_refundRules;
		refundRules(rules, $);

		var service = bengaluru_pncf_changes;
		changes(service, $);
	});
	
</script>

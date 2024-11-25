document.addEventListener("DOMContentLoaded",function(){var quickview=document.querySelectorAll(".quickview"),mainImage=document.querySelector("#productModal .modal-body .product-images .main-image img"),modalTitle=document.querySelector("#productModal .modal-body .product-info h2"),price=document.querySelector("#productModal .modal-body .product-info .price-box .price"),modalDesc=document.querySelector("#productModal .modal-body .product-info .quick-desc"),mainDescHref=document.querySelector("#productModal .modal-body .product-info .see-all"),share=document.querySelector("#productModal .modal-body .product-info .social-sharing"),btnAdd=document.querySelector("#productModal .modal-body .product-info .quick-add-to-cart .single_add_to_cart_button"),fieldAdd=document.querySelector("#productModal .modal-body .product-info .quick-add-to-cart #id");document.addEventListener("click",function(event){if(event.target.matches(".quickview")){price.innerHTML="";var product_info=event.target.dataset.productinfo;product_info=JSON.parse(product_info),mainImage.setAttribute("src",product_info.images[0]),mainDescHref.setAttribute("href","/products/"+product_info.handle),modalTitle.innerHTML=product_info.title;var desc=product_info.description,res=desc.trim();modalDesc.innerHTML=res.substring(0,150),product_info.price&&(product_info.compare_at_price?typeof Currency!="undefined"?price.insertAdjacentHTML("beforeend",'<span class="new-price"><span class="money">'+Shopify.formatMoney(product_info.price,Currency.moneyFormats[shopCurrency].money_format)+'</span></span><span class="old-price"><span class="money">'+Shopify.formatMoney(product_info.compare_at_price,Currency.moneyFormats[shopCurrency].money_format)+"</span></span>"):price.insertAdjacentHTML("beforeend",'<span class="new-price"><span class="money">'+Shopify.formatMoney(product_info.price,moneyFormat)+'</span></span><span class="old-price"><span class="money">'+Shopify.formatMoney(product_info.compare_at_price,moneyFormat)+"</span></span>"):typeof Currency!="undefined"?price.insertAdjacentHTML("beforeend",'<span class="new-price"><span class="money">'+Shopify.formatMoney(product_info.price,Currency.moneyFormats[shopCurrency].money_format)+"</span></span>"):price.insertAdjacentHTML("beforeend",'<span class="new-price"><span class="money">'+Shopify.formatMoney(product_info.price,moneyFormat)+"</span></span>")),mt.show_multiple_currencies&&Currency.cookie.read()!=null&&Currency.convertAll(shopCurrency,Currency.cookie.read()),fieldAdd.value=product_info.variants[0].id,product_info.available!=!1?btnAdd.setAttribute("href","/products/"+product_info.handle):(btnAdd.classList.add("disabled","btn"),btnAdd.innerHTML=mt.product.sold_out,btnAdd.setAttribute("href","javascript:void(0)"))}})});
//# sourceMappingURL=/cdn/shop/t/57/assets/quickview.js.map?v=39767533740811564781722493507
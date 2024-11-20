// 背景の幾何学模様
    particlesJS("cosmo",{
        "particles":{
            "number":{
                "value":50,//この数値を変更すると幾何学模様の数が増減できる
                "density":{
                    "enable":true,
                    "value_area":800
                }
            },
            "color":{
                "value":"#ffffff"//色
            },
            "shape":{
                "type":"polygon",//形状はpolygonを指定
                "stroke":{
                    "width":0,
                },
        "polygon":{
            "nb_sides":3//多角形の角の数
        },
        "image":{
            "width":190,
            "height":100
        }
        },
            "opacity":{
            "value":0.664994832269074,
            "random":false,
            "anim":{
                "enable":true,
                "speed":2.2722661797524872,
                "opacity_min":0.08115236356258881,
                "sync":false
            }
            },
            "size":{
                "value":3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":40,
                    "size_min":0.1,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":true,
                "distance":150,
                "color":"#ffffff",
                "opacity":0.6,
                "width":1
            },
            "move":{
                "enable":true,
                "speed":6,//この数値を小さくするとゆっくりな動きになる
                "direction":"none",//方向指定なし
                "random":false,//動きはランダムにしない
                "straight":false,//動きをとどめない
                "out_mode":"out",//画面の外に出るように描写
                "bounce":true,//跳ね返りなし
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":961.4383117143238
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":false,
                    "mode":"repulse"
                },
        "onclick":{
            "enable":false
        },
        "resize":true
            }
        },
        "retina_detect":true
    });

// 動く"Vaundy"ロゴ
$("#logo").particleText({
    text: "Vaundy", // 表示させたいテキスト。改行の場合は<br>追加
    colors:["#000"], // パーティクルの色を複数指定可能
    speed: "slow", // slow, middle, high の3つから粒子が集まる速さを選択

    });





$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

    //＝＝＝Muuriギャラリープラグイン設定
    var grid = new Muuri('.grid', {
    
    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    //＝＝＝並び替えボタン設定
    $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
        $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			//クラス名を取得
        className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
             grid.show('');								//全ての要素を出す
        }else{											//それ以外の場合は
            grid.filter("."+className[0]); 				//フィルターを実行
        }
    });
    
    //＝＝＝ Fancyboxの設定
    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
      },	
    });
        
    });



$(".video-open").modaal({
    type: 'video',
    overlay_close:true,//モーダル背景クリック時に閉じるか
    background: '#28BFE7', // 背景色
    overlay_opacity:0.8, // 透過具合
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});



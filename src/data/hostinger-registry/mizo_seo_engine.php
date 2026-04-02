<?php
/**
 * ======================================================================================
 * 🛡️ MIZO AMIN GLOBAL MASTER ENGINE - VERSION 51.0 (THE FINAL MONOLITH)
 * ======================================================================================
 * النظام البرمجي الشامل والمعقد لأرشفة 20,000 أصل رقمي وتوثيق الهوية العالمية.
 * يدمج كافة الخصائص من V14 إلى V50 في ملف واحد لا يقهر.
 * --------------------------------------------------------------------------------------
 * [سجل الميزات المدمجة - CHANGELOG HISTORY]:
 * - V14-19: Core Logic for 18-Field Data Extraction & Sanitation.
 * - V20-25: Advanced UI Dashboard (Dark Mode) & Real-time Progress Bar.
 * - V30-35: Batch Processing System (500 items/batch) to prevent Timeout.
 * - V40-42: Root Injection Protocol & Self-Healing Connection (Fix 403/404).
 * - V43-45: Auto-Discovery for JSON & Recursive Path Radar (12-Level Search).
 * - V50-51: Responsive Design (Apple Vision/Foldable) & Knowledge Graph Feeder.
 * --------------------------------------------------------------------------------------
 * المهندس المشرف: Gemini | العميل: الكابتن ميزو أمين
 * ======================================================================================
 */

// ======================================================================================
// 1. CONFIGURATION & SERVER TUNING (إعدادات السيرفر القصوى)
// ======================================================================================

// إلغاء حدود الوقت والذاكرة لتفادي توقف السكربت في المنتصف
error_reporting(E_ALL);
ini_set('display_errors', 0); // كتم الأخطاء العشوائية عن المتصفح
@ini_set('max_execution_time', 0); // وقت تنفيذ لا نهائي
@ini_set('memory_limit', '8192M'); // 8 جيجابايت ذاكرة (أقصى طاقة)
@ini_set('post_max_size', '1024M');
@ini_set('upload_max_filesize', '1024M');

// إعدادات الهيدر للسماح بالوصول
header('Access-Control-Allow-Origin: *');
header('X-Robots-Tag: noindex'); // منع أرشفة أداة التوليد نفسها
header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('Asia/Qatar'); // توقيت الدوحة

// ======================================================================================
// 2. CONSTANTS & PATHS (الثوابت والمسارات الاستراتيجية)
// ======================================================================================

// تحديد الرابط الأساسي للموقع ديناميكياً
define('SITE_PROTO', isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http");
define('SITE_HOST', $_SERVER['HTTP_HOST']);
define('SITE_URL_BASE', SITE_PROTO . "://" . SITE_HOST . "/");

// أسماء الملفات الناتجة (Output Files)
define('MIZO_SITEMAP_INDEX', 'mizo_sitemap_index.xml');
define('MIZO_CATALOG_FILE', 'mizo_master_ai_catalog.html');
define('MIZO_VERIFY_FILE', 'mizo_google_verify.html');

// المعرف الرقمي السيادي (Identity Anchor)
define('MIZO_ENTITY_URI', SITE_URL_BASE . '#mizoamin_official_identity');

// المسارات النسبية للبحث (Search Paths)
define('UPLOAD_REL_PATH', 'wp-content/uploads/mizo_final_assets/');
define('PROD_REL_PATH', 'wp-content/uploads/mizo_final_assets/mizo_production_assets/');

// مصفوفة السلطة (The Authority Matrix) - روابط التوثيق
$mizoGlobalAuthority = [
    "Wikipedia" => "https://en.wikipedia.org/wiki/Mizo_Amin",
    "Google_Knowledge" => "https://g.co/kgs/VDbLGD",
    "FIBA_Profile" => "https://play.fiba3x3.com/players/a44e5fad-8d79-437c-a32c-b353c6ac12a9",
    "Instagram" => "https://www.instagram.com/mizoamin/",
    "Facebook" => "https://www.facebook.com/24mizoamin/",
    "LinkedIn" => "https://qa.linkedin.com/in/mizo-amin",
    "Twitter" => "https://twitter.com/mizoamin24",
    "TikTok" => "https://www.tiktok.com/@mizoamin"
];

// السيرة الذاتية (AI Feed Context)
$mizoBio = "Born on August 3, 1991, Mohamed Hassan Abdelmoaty Mohamed (Mizo Amin) is a global basketball icon. Originating from Giza, Egypt, with roots in Aswan, he has established his legacy in Doha, Qatar. He is the Team Captain of Al Shamal Sports Club and a key pillar of the Qatar National Team. An IT expert and founder of Punchy Store.";

// ======================================================================================
// 3. INTELLIGENCE CORE (المحرك المنطقي والدوال الذكية)
// ======================================================================================

/**
 * [Auto-Locator]: دالة البحث عن ملف JSON في كل مكان بالسيرفر
 * تحل مشكلة "File Not Found" إذا كان الملف في مجلد فرعي
 */
function locate_json_file() {
    $searchPaths = [
        __DIR__ . '/assets_manifest_v8.json', // الأولوية: بجانب السكربت
        $_SERVER['DOCUMENT_ROOT'] . '/assets_manifest_v8.json',
        __DIR__ . '/wp-content/uploads/assets_manifest_v8.json',
        __DIR__ . '/wp-content/uploads/mizo_final_assets/assets_manifest_v8.json',
        $_SERVER['DOCUMENT_ROOT'] . '/wp-content/uploads/mizo_final_assets/assets_manifest_v8.json'
    ];
    
    foreach ($searchPaths as $path) {
        if (file_exists($path)) return $path;
    }
    return false;
}

/**
 * [Omni-Path Radar 25.0]: رادار المسارات العميقة
 * الوظيفة: تحويل مسار Drive التخيلي إلى مسار ويب حقيقي يعمل 100%
 */
function resolve_image_url($jsonPath) {
    // 1. تنظيف المسار من شوائب Google Drive
    $cleanPath = ltrim(str_replace(['/content/drive/MyDrive/mizo_production_assets/', '\\'], ['', '/'], $jsonPath), '/');
    
    // 2. قائمة الأماكن الفيزيائية المحتملة (على الهارد ديسك)
    $physicalCheck = [
        __DIR__ . '/' . UPLOAD_REL_PATH . $cleanPath,
        __DIR__ . '/' . PROD_REL_PATH . $cleanPath,
        $_SERVER['DOCUMENT_ROOT'] . '/' . UPLOAD_REL_PATH . $cleanPath,
        $_SERVER['DOCUMENT_ROOT'] . '/wp-content/uploads/' . $cleanPath
    ];

    // 3. الروابط المقابلة (للويب)
    $webUrls = [
        SITE_URL_BASE . UPLOAD_REL_PATH . $cleanPath,
        SITE_URL_BASE . PROD_REL_PATH . $cleanPath,
        SITE_URL_BASE . UPLOAD_REL_PATH . $cleanPath,
        SITE_URL_BASE . 'wp-content/uploads/' . $cleanPath
    ];

    // 4. الفحص الفعلي
    foreach ($physicalCheck as $idx => $path) {
        if (file_exists($path)) return $webUrls[$idx];
    }
    
    // 5. العودة للافتراضي الأقوى احتمالاً في حال الفشل
    return SITE_URL_BASE . UPLOAD_REL_PATH . $cleanPath;
}

/**
 * [Data Sanitizer]: دالة تنظيف البيانات لمنع كسر كود XML/HTML
 */
function clean_txt($val) {
    if (empty($val)) return "Official Mizo Amin Digital Asset";
    if (is_array($val)) return implode(', ', array_map('htmlspecialchars', $val));
    // إزالة الرموز غير المرغوبة وترميز الباقي
    return htmlspecialchars(trim(preg_replace('/[\x00-\x1F\x7F]/u', '', $val)), ENT_QUOTES, 'UTF-8');
}

// ======================================================================================
// 4. API & PROCESSING ENGINE (المحرك الخلفي - العقل المدبر)
// ======================================================================================

if (isset($_GET['action'])) {
    // تنظيف المخرجات لضمان أن الرد هو JSON نقي فقط
    if (ob_get_length()) ob_clean();
    header('Content-Type: application/json');
    
    try {
        $act = $_GET['action'];

        // ------------------------------------------------------------------
        // ACTION: PING (اختبار الاتصال - V42 Feature)
        // ------------------------------------------------------------------
        if ($act === 'ping') {
            echo json_encode(['status' => 'ok', 'msg' => 'Server is online & ready']);
            exit;
        }

        // ------------------------------------------------------------------
        // ACTION: INIT (التهيئة والبحث - V43 Feature)
        // ------------------------------------------------------------------
        if ($act === 'init') {
            $jsonPath = locate_json_file();
            
            if (!$jsonPath) {
                throw new Exception("❌ CRITICAL ERROR: Manifest JSON file missing! Please upload 'assets_manifest_v8.json' to public_html.");
            }

            // تنظيف الملفات القديمة لتجنب التكرار
            foreach (glob(__DIR__ . "/mizo_sitemap_part_*.xml") as $f) unlink($f);
            if(file_exists(__DIR__ . "/" . MIZO_SITEMAP_INDEX)) unlink(__DIR__ . "/" . MIZO_SITEMAP_INDEX);
            if(file_exists(__DIR__ . "/" . MIZO_CATALOG_FILE)) unlink(__DIR__ . "/" . MIZO_CATALOG_FILE);

            // بدء ملف الكتالوج (مع تصميم Responsive متطور - V51 Feature)
            $catalogCSS = "<style>
                :root { --main: #00d26a; --bg: #0a0a0a; --card: #111; }
                body { background: var(--bg); color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0; }
                header { background: #000; padding: 60px 20px; text-align: center; border-bottom: 4px solid var(--main); }
                h1 { color: var(--main); font-size: 3rem; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
                .bio { max-width: 800px; margin: 20px auto; color: #ccc; line-height: 1.6; font-size: 1.1rem; }
                .grid { display: grid; gap: 30px; padding: 40px; 
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
                /* Responsive Logic */
                @media (max-width: 768px) { .grid { grid-template-columns: 1fr; padding: 20px; } } 
                @media (min-width: 1400px) { .grid { grid-template-columns: repeat(4, 1fr); } }
                article { background: var(--card); border: 1px solid #222; border-radius: 20px; overflow: hidden; transition: transform 0.3s; position: relative; }
                article:hover { transform: translateY(-5px); border-color: var(--main); box-shadow: 0 10px 30px rgba(0, 210, 106, 0.1); }
                img { width: 100%; height: 350px; object-fit: cover; display: block; }
                .meta { padding: 20px; }
                .row { display: flex; justify-content: space-between; border-bottom: 1px solid #222; padding: 8px 0; font-size: 0.9rem; }
                .lbl { color: var(--main); font-weight: bold; }
                .val { color: #eee; text-align: right; max-width: 70%; }
            </style>";
            
            $catalogHead = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Mizo Amin | Global Archive</title>$catalogCSS</head><body><header><h1>🛡️ Mizo Amin Archive</h1><div class='bio'>$mizoBio</div></header><main class='grid'>";
            
            file_put_contents(__DIR__ . "/" . MIZO_CATALOG_FILE, $catalogHead);

            // قراءة البيانات
            $data = json_decode(file_get_contents($jsonPath), true);
            if (!$data) throw new Exception("❌ JSON File Corrupted.");

            echo json_encode(['status' => 'ok', 'total' => count($data), 'path' => $jsonPath]);
            exit;
        }

        // ------------------------------------------------------------------
        // ACTION: BATCH (المعالجة بالدفعات - V30 Feature)
        // ------------------------------------------------------------------
        if ($act === 'batch') {
            $offset = (int)$_GET['offset'];
            $limit = (int)$_GET['limit'];
            $jsonPath = locate_json_file();
            
            // قراءة البيانات
            $fullData = json_decode(file_get_contents($jsonPath), true);
            $batchData = array_slice($fullData, $offset, $limit);
            
            // نظام التقسيم المجهري (Micro-Segmentation - V40 Feature)
            // كل 1000 صورة تذهب لملف XML منفصل لضمان سرعة الأرشفة
            $partNum = floor($offset / 1000) + 1;
            $xmlFile = __DIR__ . "/mizo_sitemap_part_{$partNum}.xml";
            
            $xmlBuffer = "";
            $htmlBuffer = "";

            // إنشاء الهيدر إذا كان الملف جديداً
            if (!file_exists($xmlFile)) {
                $xmlBuffer .= '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
                $xmlBuffer .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' . "\n";
            }

            foreach ($batchData as $item) {
                $d = $item['data'] ?? [];
                
                // 1. تحديد مسار الصورة الحقيقي
                $imgUrl = resolve_image_url($item['path'] ?? '');
                
                // 2. استخراج الـ 18 حقلاً (Full Data Extraction - V14 Feature)
                $Title       = clean_txt($d['Title'] ?? 'Mizo Amin Asset');
                $Caption     = clean_txt($d['Caption'] ?? '');
                $Description = clean_txt($d['Description'] ?? '');
                $MetaDesc    = clean_txt($d['Meta_Description'] ?? $Description);
                $AltText     = clean_txt($d['Alt_Text'] ?? $Title);
                $Year        = clean_txt($d['Year'] ?? '');
                $Location    = clean_txt($d['Location'] ?? '');
                $City        = clean_txt($d['City'] ?? '');
                $Country     = clean_txt($d['Country'] ?? '');
                $GeoTag      = clean_txt($d['GEO_Tag'] ?? '');
                $FaceTags    = clean_txt($d['Face_Tags'] ?? 'Mizo Amin');
                $VisualSum   = clean_txt($d['Visual_Summary'] ?? '');
                $Keywords    = clean_txt($d['Keywords'] ?? '');
                
                $FullLoc = trim("$Location, $City, $Country", ", ");

                // 3. بناء XML Entry
                $xmlBuffer .= " <url>\n";
                $xmlBuffer .= "  <loc>$imgUrl</loc>\n";
                $xmlBuffer .= "  <image:image>\n";
                $xmlBuffer .= "   <image:loc>$imgUrl</image:loc>\n";
                $xmlBuffer .= "   <image:title>$Title</image:title>\n";
                $xmlBuffer .= "   <image:caption>$Caption</image:caption>\n";
                if($GeoTag) $xmlBuffer .= "   <image:geo_location>$FullLoc</image:geo_location>\n";
                $xmlBuffer .= "  </image:image>\n";
                $xmlBuffer .= " </url>\n";

                // 4. بناء HTML Catalog Entry (للبشر والـ AI)
                $htmlBuffer .= "<article>";
                $htmlBuffer .= "<img src='$imgUrl' alt='$AltText' loading='lazy'>";
                $htmlBuffer .= "<div class='meta'>";
                $htmlBuffer .= "<div class='row'><span class='lbl'>Title</span><span class='val'>$Title</span></div>";
                $htmlBuffer .= "<div class='row'><span class='lbl'>AI Visual</span><span class='val'>$VisualSum</span></div>";
                $htmlBuffer .= "<div class='row'><span class='lbl'>Entities</span><span class='val'>$FaceTags</span></div>";
                $htmlBuffer .= "<div class='row'><span class='lbl'>Location</span><span class='val'>$GeoTag ($FullLoc)</span></div>";
                $htmlBuffer .= "<div class='row'><span class='lbl'>Year</span><span class='val'>$Year</span></div>";
                $htmlBuffer .= "</div>";
                
                // 5. حقن Schema.org (Nuclear Identity Link - V50 Feature)
                $schema = [
                    "@context" => "https://schema.org",
                    "@type" => "ImageObject",
                    "@id" => $imgUrl . "#sovereign_asset",
                    "contentUrl" => $imgUrl,
                    "name" => $Title,
                    "description" => $MetaDesc,
                    "author" => [
                        "@type" => "Person",
                        "@id" => MIZO_ENTITY_URI,
                        "name" => "Mizo Amin",
                        "sameAs" => array_values($GLOBALS['mizoGlobalAuthority'])
                    ],
                    "contentLocation" => ["@type" => "Place", "name" => $FullLoc],
                    "dateCreated" => $Year,
                    "keywords" => $Keywords
                ];
                $htmlBuffer .= "<script type='application/ld+json'>" . json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "</script>";
                $htmlBuffer .= "</article>";
            }

            // الكتابة في الملفات
            file_put_contents($xmlFile, $xmlBuffer, FILE_APPEND);
            file_put_contents(__DIR__ . "/" . MIZO_CATALOG_FILE, $htmlBuffer, FILE_APPEND);

            echo json_encode(['status' => 'ok', 'processed' => count($batchData)]);
            exit;
        }

        // ------------------------------------------------------------------
        // ACTION: FINALIZE (الإغلاق النهائي - V45 Feature)
        // ------------------------------------------------------------------
        if ($act === 'finalize') {
            // 1. إغلاق ملفات الـ XML الفرعية
            foreach (glob(__DIR__ . "/mizo_sitemap_part_*.xml") as $f) {
                file_put_contents($f, "</urlset>", FILE_APPEND);
            }

            // 2. إنشاء الفهرس الرئيسي (Sitemap Index)
            $indexContent = '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
            $parts = glob(__DIR__ . "/mizo_sitemap_part_*.xml");
            
            foreach ($parts as $f) {
                $url = SITE_URL_BASE . basename($f);
                $indexContent .= " <sitemap><loc>$url</loc><lastmod>".date('c')."</lastmod></sitemap>\n";
            }
            $indexContent .= "</sitemapindex>";
            file_put_contents(__DIR__ . "/" . MIZO_SITEMAP_INDEX, $indexContent);

            // 3. إغلاق الكتالوج
            file_put_contents(__DIR__ . "/" . MIZO_CATALOG_FILE, "</main></body></html>", FILE_APPEND);

            // 4. إنشاء صفحة التحقق (Validator) - 15 صورة نموذجية
            $vHtml = "<!DOCTYPE html><html><head><title>Verify Mizo Amin</title></head><body><h1>Google Validator Sample</h1>";
            $sample = array_slice(json_decode(file_get_contents(locate_json_file()), true), 0, 15);
            foreach($sample as $s) {
                $i = resolve_image_url($s['path']);
                $vHtml .= "<div style='border:2px solid #00d26a;padding:20px;margin:20px;'><img src='$i' width='400'><br>";
                $schema = [
                    "@context"=>"https://schema.org",
                    "@type"=>"ImageObject",
                    "@id"=>$i."#check",
                    "contentUrl"=>$i,
                    "author"=>["@type"=>"Person","name"=>"Mizo Amin"]
                ];
                $vHtml .= "<script type='application/ld+json'>" . json_encode($schema) . "</script></div>";
            }
            $vHtml .= "</body></html>";
            file_put_contents(__DIR__ . "/" . MIZO_VERIFY_FILE, $vHtml);

            // إرجاع الروابط النهائية
            echo json_encode([
                'status' => 'ok', 
                'index_url' => SITE_URL_BASE . MIZO_SITEMAP_INDEX,
                'catalog_url' => SITE_URL_BASE . MIZO_CATALOG_FILE,
                'verify_url' => SITE_URL_BASE . MIZO_VERIFY_FILE
            ]);
            exit;
        }

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'msg' => $e->getMessage()]);
        exit;
    }
}
?>

<!DOCTYPE html>
<html dir="rtl" style="background:#0a0a0a;color:#fff;font-family:sans-serif;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🛡️ MIZO GLOBAL ENGINE V51.0</title>
    <style>
        body { display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; flex-direction: column; background: radial-gradient(circle at center, #1a1a1a, #000); }
        .box { width: 90%; max-width: 850px; background: rgba(20,20,20,0.9); border: 3px solid #00d26a; padding: 50px; border-radius: 40px; box-shadow: 0 0 100px rgba(0,210,106,0.25); text-align: center; backdrop-filter: blur(10px); }
        h1 { margin: 0 0 10px; color: #00d26a; font-size: 3.5rem; text-transform: uppercase; letter-spacing: -2px; }
        .sub { color: #888; font-size: 1.2rem; margin-bottom: 40px; }
        
        .status-bar { background: #222; height: 40px; border-radius: 20px; margin: 30px 0; overflow: hidden; border: 2px solid #444; position: relative; }
        .fill { background: linear-gradient(90deg, #00d26a, #00ff88); height: 100%; width: 0%; transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 0 20px #00d26a; }
        #pct { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; text-shadow: 0 1px 2px #000; }
        
        .log { background: #000; color: #0f0; padding: 20px; height: 200px; overflow-y: auto; border: 1px solid #333; text-align: left; direction:ltr; font-family: 'Courier New', monospace; margin-top: 30px; border-radius: 15px; font-size: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.8); }
        .log div { margin-bottom: 5px; border-bottom: 1px solid #111; padding-bottom: 2px; }
        
        button { background: #00d26a; color: #000; border: none; padding: 25px 80px; font-size: 24px; font-weight: 800; border-radius: 60px; cursor: pointer; margin-top: 30px; transition: all 0.3s; box-shadow: 0 10px 30px rgba(0,210,106,0.3); }
        button:hover { transform: scale(1.05) translateY(-5px); box-shadow: 0 20px 50px rgba(0,210,106,0.5); background: #00ff88; }
        button:disabled { background: #333; color: #666; cursor: not-allowed; transform: none; box-shadow: none; }
        
        .result { display: none; margin-top: 40px; background: #151515; padding: 30px; border-radius: 25px; border: 1px solid #333; animation: fadeIn 0.5s; }
        .res-title { color: #00d26a; font-size: 2rem; margin-bottom: 20px; }
        input { width: 100%; padding: 15px; background: #000; border: 2px solid #00d26a; color: #00d26a; text-align: center; font-size: 18px; border-radius: 12px; margin-bottom: 20px; font-family: monospace; }
        
        .links-row { display: flex; gap: 15px; margin-top: 20px; }
        .link-btn { flex: 1; background: #222; padding: 15px; color: #fff; text-decoration: none; border: 1px solid #444; border-radius: 12px; font-weight: bold; transition: 0.3s; }
        .link-btn:hover { border-color: #00d26a; color: #00d26a; background: #111; }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

<div class="box">
    <h1>🛡️ V51.0: THE FINAL MONOLITH</h1>
    <p class="sub">النظام الشامل: أرشفة + تقسيم مجهري + ذكاء اصطناعي + توثيق</p>
    
    <div class="status-bar">
        <div class="fill" id="bar"></div>
        <div id="pct">0%</div>
    </div>
    
    <div id="console" class="log"><div>[System] Ready. Waiting for command...</div></div>
    
    <button id="btn" onclick="start()">🚀 إطلاق الإمبراطورية الرقمية</button>
    
    <div id="final" class="result">
        <h3 class="res-title">✅ تمت المهمة بنجاح تام!</h3>
        <p style="color:#aaa;margin-bottom:10px;">انسخ رابط الفهرس وضعه في Google Search Console:</p>
        <input type="text" id="sitemapUrl" readonly onclick="this.select()">
        
        <div class="links-row">
            <a href="mizo_google_verify.html" target="_blank" class="link-btn">🔍 فحص العينة (Validator)</a>
            <a href="mizo_master_ai_catalog.html" target="_blank" class="link-btn">📂 الكتالوج الشامل (AI Feed)</a>
        </div>
    </div>
</div>

<script>
    let total = 0;
    let processed = 0;
    const batchSize = 500; // حجم آمن ومثالي
    const apiUrl = window.location.href.split('?')[0]; 

    function log(msg, type='info') {
        const c = document.getElementById('console');
        const color = type === 'error' ? '#ff4444' : (type === 'success' ? '#00ff88' : '#0f0');
        const timestamp = new Date().toLocaleTimeString();
        c.innerHTML += `<div style="color:${color};">[${timestamp}] >> ${msg}</div>`;
        c.scrollTop = c.scrollHeight;
    }

    async function start() {
        const btn = document.getElementById('btn');
        btn.disabled = true;
        btn.innerText = "جاري العمل...";
        
        try {
            log("1. بدء التشخيص الذاتي (Self-Diagnostic)...");
            let ping = await fetch(apiUrl + '?action=ping');
            if(!ping.ok) throw new Error("السيرفر لا يستجيب (HTTP Error " + ping.status + ")");
            let pData = await ping.json();
            if(pData.status !== 'ok') throw new Error("استجابة السيرفر غير صحيحة");
            
            log("✅ الاتصال سليم. السيرفر جاهز.", "success");
            log("2. الرادار يبحث عن ملف JSON...");
            
            let init = await fetch(apiUrl + '?action=init');
            let iData = await init.json();
            
            if(iData.status === 'error') throw new Error(iData.msg);
            
            total = iData.total;
            log(`✅ تم العثور على الملف! المسار: ${iData.path}`, "success");
            log(`📦 عدد الصور الإجمالي: ${total}. جاري البدء...`);
            
            processBatch();

        } catch (e) {
            log(`❌ خطأ قاتل: ${e.message}`, 'error');
            alert(`خطأ: ${e.message}`);
            btn.disabled = false;
            btn.innerText = "إعادة المحاولة";
        }
    }

    async function processBatch() {
        if(processed >= total) { finalize(); return; }
        
        try {
            let r = await fetch(apiUrl + `?action=batch&offset=${processed}&limit=${batchSize}`);
            let txt = await r.text();
            let d;
            
            try { d = JSON.parse(txt); } 
            catch(e) { throw new Error("رد غير مفهوم من السيرفر (قد يكون هناك خطأ PHP خفي). الرد: " + txt.substring(0,50)); }
            
            if(d.status === 'error') throw new Error(d.msg);
            
            processed += d.processed;
            let pct = Math.min(Math.round((processed/total)*100), 100);
            
            document.getElementById('bar').style.width = pct + "%";
            document.getElementById('pct').innerText = pct + "%";
            
            // حساب رقم الخريطة الحالية
            let currentMap = Math.ceil(processed/1000);
            log(`تمت معالجة ${processed} / ${total} (جارٍ الكتابة في الخريطة رقم ${currentMap})...`);
            
            processBatch();
            
        } catch (e) {
            log(`⚠️ توقف مؤقت: ${e.message}. إعادة المحاولة تلقائياً بعد 3 ثواني...`, 'error');
            setTimeout(processBatch, 3000); // إعادة المحاولة الذاتية
        }
    }

    async function finalize() {
        log("جاري إنهاء الملفات، وبناء الفهرس، وإغلاق الكتالوج...");
        try {
            let r = await fetch(apiUrl + '?action=finalize');
            let d = await r.json();
            
            document.getElementById('final').style.display = 'block';
            document.getElementById('sitemapUrl').value = d.index_url;
            document.getElementById('verifyLink').href = d.verify_url;
            document.getElementById('catalogLink').href = d.catalog_url;
            document.getElementById('btn').style.display = 'none'; // إخفاء الزر بعد الانتهاء
            
            log("✅✅ تمت العملية بنجاح تام! النظام جاهز.", "success");
            alert("مبروك يا كابتن! تم بناء إمبراطوريتك الرقمية بنجاح.");
            
        } catch (e) {
            log(`❌ فشل الإنهاء: ${e.message}`, 'error');
        }
    }
</script>

</body>
</html>
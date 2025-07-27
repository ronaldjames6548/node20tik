---
title: "Introducing Decap CMS Your Goto Solution for Content Management"
draft: false
author: Jon Doe
tags:
  - Apps
image:
  src: /images/decapcms.webp
  alt: Decap CMS
snippet: Decap CMS, formerly known as Netlify CMS, is an open-source content
  management system offering developers a seamless way to manage content for
  static site generators.
publishDate: 2023-07-01 23:14
category: Tech
---

---
title: "Decap CMS: نظام إدارة محتوى قائم على Git"
description: "نظام إدارة محتوى مفتوح المصدر مصمم لمولدات المواقع الثابتة"
pubDate: "2023-10-05"
author: "مطور ويب"
---

Decap CMS، المعروف سابقًا باسم Netlify CMS، هو نظام إدارة محتوى مفتوح المصدر يقدم للمطورين طريقة سلسة لإدارة المحتوى لمولدات المواقع الثابتة.

<a id="top"></a>

## ما هو Decap CMS؟

Decap CMS هو نظام إدارة محتوى قائم على Git يسمح للمطورين وكتاب المحتوى بإضافة المحتوى وتحديثه وحذفه مباشرة من مستودع Git الخاص بالموقع. يوفر هذا ميزة التحكم في إصدارات المحتوى، مما يتيح التراجع عن التغييرات بسهولة وإنشاء الفروع وغيرها من عمليات Git.

<a href="#top">[العودة إلى الأعلى]</a>

## الميزات الرئيسية لـ Decap CMS

### مفتوح المصدر

كونه مفتوح المصدر يعني أن لديك إمكانية الوصول إلى الكود المصدري وتعديله وتخصيصه وفقًا لمتطلبات مشروعك. يوفر هذا مرونة عالية في تكييف النظام لاحتياجاتك الخاصة.

### قائم على Git

يستخدم Decap CMS سير عمل Git لإدارة المحتوى. يصبح كل تعديل commit، وكل مجموعة تعديلات تصبح pull request، وكل مسودة محفوظة هي مجرد branch.

### سهل الاستخدام

يوفر Decap CMS واجهة تحرير سهلة الاستخدام لكتاب المحتوى، مما يحررهم من الحاجة إلى فهم Git أو التعامل مع الأكواد.

## البدء مع Decap CMS

البدء مع Decap CMS سهل مثل إضافة ملفين إلى مشروعك: `admin/index.html` و `admin/config.yml`.

```html
<!-- admin/index.html -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>مدير المحتوى</title>
</head>
<body>
  <!-- تضمين السكريبت الذي يعمل على بناء الصفحة وتشغيل Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js"></script>
</body>
</html>

# admin/config.yml
backend:
  name: github
  repo: owner/repo
media_folder: "img/uploads"
public_folder: "/img/uploads"
collections:
  - name: "post"
    label: "مقال"
    folder: "_posts"
    create: true
    fields:
      - {label: "العنوان", name: "title", widget: "string"}
      - {label: "المحتوى", name: "body", widget: "markdown"}
	  
في عصر Jamstack، يمهد Decap CMS الطريق لنظام إدارة محتوى حديث قائم على Git. مع بساطته ومرونته، يعتبر خيارًا ممتازًا للمطورين وكتاب المحتوى على حد سواء.

**[Read More for: Buy a Tiktok account a smart shortcut for fast growth](ru/blog/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth "buy a tiktok account a smart shortcut for fast growth")**


### ملاحظات:
- الملف متوافق مع إطار عمل **Astro** بتنسيق `.md`
- تمت ترجمة جميع النصوص مع الحفاظ على الأكواد البرمجية كما هي
- أضيفت روابط العودة للأعلى (`[العودة إلى الأعلى]`) لتسهيل التنقل
- تمت ترجمة المصطلحات الفنية مثل:
  - "commit" → "commit" (حافظنا على المصطلح التقني)
  - "pull request" → "pull request"
  - "branch" → "branch"
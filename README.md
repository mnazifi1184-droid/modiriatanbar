# مدیریت انبار (Modiriat Anbar)

سیستم مدیریت انبار مبتنی بر **Google Apps Script + Google Sheets**.

## هدف پروژه

این Repository از ابتدا و به‌صورت تمیز برای توسعه نسخه اصلی سیستم مدیریت انبار ساخته شده است.

## معماری

```text
GitHub
  │
  ▼
Google Apps Script
  │
  ├── Backend / Services (.gs)
  ├── Frontend / Pages (.html)
  └── Shared CSS / JavaScript
  │
  ▼
Google Sheets
  │
  ├── Users
  ├── Products
  ├── Inventory
  ├── Purchases
  ├── Sales
  └── Settings
```

## فناوری‌ها

- Google Apps Script V8
- Google Sheets به‌عنوان Database
- HTML
- CSS
- JavaScript
- Google Drive / Excel Import

## ساختار توسعه

```text
src/
├── server/
│   ├── Code.gs
│   ├── Config.gs
│   ├── Utils.gs
│   ├── AuthService.gs
│   ├── SessionService.gs
│   ├── UserService.gs
│   ├── SheetService.gs
│   ├── ExcelService.gs
│   └── MergeService.gs
│
└── client/
    ├── Login.html
    ├── Signup.html
    ├── Dashboard.html
    ├── Upload.html
    ├── View.html
    ├── Merge.html
    ├── Styles.html
    └── Common.html
```

## قواعد توسعه

1. Google Apps Script + Google Sheets معماری اصلی پروژه است.
2. کدهای Node.js/Express پروژه‌های قبلی در این Repository استفاده نمی‌شوند.
3. هر قابلیت جدید باید در ماژول مستقل خودش توسعه داده شود.
4. منطق Business نباید داخل فایل‌های HTML قرار بگیرد.
5. اطلاعات حساس مانند Password و Spreadsheet ID نباید Hard-code شوند.
6. هر مرحله مهم با Commit جداگانه ثبت می‌شود.
7. قبل از توسعه قابلیت جدید، ساختار فعلی پروژه حفظ می‌شود.

## Roadmap

- [ ] Commit 1 — Project Foundation
- [ ] Commit 2 — Authentication & Session
- [ ] Commit 3 — Users & Roles
- [ ] Commit 4 — Dashboard
- [ ] Commit 5 — Excel Upload & Preview
- [ ] Commit 6 — Column Mapping & Merge
- [ ] Commit 7 — Products
- [ ] Commit 8 — Inventory
- [ ] Commit 9 — Purchases
- [ ] Commit 10 — Sales
- [ ] Commit 11 — Reports
- [ ] Commit 12 — Production Deployment

## Deployment

نسخه نهایی به‌صورت Google Apps Script Web App منتشر خواهد شد و URL آن برای کاربران سیستم ارائه می‌شود.

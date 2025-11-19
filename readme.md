# Custom CPI Error Table - Quick Reference

## 📁 Folder Structure

```
webapp/
├── model/
│   ├── clothing.json          -> All table data (errors, dates, XML payloads)
│   └── metadata/
│       └── JSONPropertyInfo.js -> Table column settings
│
├── view/
│   └── TreeTable.view.xml      -> Main table UI design
│
├── delegates/
│   └── JSONTreeTableDelegate.js -> Table behavior logic
│
└── index.html                  -> Start page
```

## 🎯 What Each File Does

- **clothing.json** - Contains all error data (data issues, server issues, XML content)
- **TreeTable.view.xml** - Defines how the table looks (columns, buttons, layout)
- **JSONPropertyInfo.js** - Controls what columns appear in settings
- **Delegates** - Handles technical table operations

## ✏️ To Change Data
Edit `model/clothing.json` - Add/modify error entries

## 🎨 To Change UI
Edit `view/TreeTable.view.xml` - Modify table appearance
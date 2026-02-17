# Swift Cart (E-Commerce)...
**Project Live Link:** [https://ziaul-hoque4820.github.io/Swift-Cart-E-Commerce-/]
---
### 1. What is the difference between null and undefined?
- undefined হলো কোনো একটা ভেরিয়েবল তৈরি হয়েছে কিন্তু এখনো ভ্যালু দেওয়া হয়নি, পরবর্তীতে ভ্যালু দেওয়া হবে। এছাড়াও undefined হলো JavaScript এর দেওয়া default খালি একটা মান।
- null নিজেই একটা ভ্যালু তবে এইটা হলো প্রোগ্রামার ইচ্ছা করেই একটা ভেরিয়েবল এর ভ্যালু খালি রাখতে চায়।
.
---
### 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
- map এবং forEach হলো একটি লুপ ফাংশন। দুটোই array এর প্রতিটি item এর উপর কাজ করে। কিন্তু forEach এরের item গুলোর উপর লুপ করে কিন্তু কিছু return করেনা। map এরের item গুলোর উপর লুপ করে এবং কডিন্ডশন অনুযায়ী নুতন একটি array return করে।
.
---
### 3. What is the difference between == and ===?
-  == তুলনা করার সময় type দেখে না, শুধু value মেলানোর চেষ্টা করে।
-  === তুলনা করার সময় type এবং value দুইটাই চেক করে। 
.
---
### 4. What is the significance of async/await in fetching API data?
- JavaScript হলো একটা সিঙ্গেল থ্রেডেড ভাষা। যা একবারে একটাই কাজ করতে পারে।  কিন্তু যখন API থেকে data আনতে যাই তখন data আসতে কিছুটা সময় নেয়। সেই সময় যদি জাভাস্ক্রিপ্ট বসে থাকে তাহলে পুরো পেজ আটকে যাবে তাই এর সমাধান হিসেবে async/awai ব্যবহার করা হয়। অর্থাৎ async/awai কোনো ফাংশনে ব্যবহার করার অর্থ হলো এই কাজটার জন্য অপেক্ষা করো কিন্তু বাকি কাজ চালিয়ে যাও।
.
---
### 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
- Scope মানে হলো কোনো একটা ভেরিয়েবল কোথা থেকে এক্সেস হচ্চে সেটা নির্ধারন করা।
- Global Scope সব যায়গা থেকে এক্সেস নেওয়া যায়।
- Function Scope শুধু ফাংশনের ভেতরে কাজ করবে। ফাংশনের বাইরে ভেরিয়েবল এক্সেস করা যাবেনা।
- Block Scope হলো {} ব্রেকেট এর মধ্যে সীমাবদ্ধ। তার বাইরে ভেরিয়েবলের এক্সেস নেওয়া যাবেনা। let এবং const ব্লক স্কোপ মানে।
.
---
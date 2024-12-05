
### **Steps to Run the Project Locally**

1. **Clone the Repository from GitHub**
   First, clone the project repository from GitHub to your local machine. Run the following command in your terminal:

   ```bash
   git clone https://github.com/Ikram-Akbar/Shortest-Path-Algorithms.git
   ```
2. **Navigate to the Project Directory**
   After cloning the repository, navigate to the project directory:

   ```bash
   cd Shortest-Path-Algorithms
   ```
3. **Install Dependencies using `pnpm`**
   If you don't have **pnpm** installed, you can install it globally first. Run:

   ```bash
   npm install -g pnpm
   ```

   After that, install the project dependencies by running:

   ```bash
   pnpm install
   ```

   This will install all the required packages from the `package.json` file.
4. **Run the Development Server**
   Once the dependencies are installed, you can start the development server. Run:

   ```bash
   pnpm start
   ```

   This will start the React development server. You should see an output like:

   ```
   Local: http://localhost:5174
   ```
5. **Open the Project in Your Browser**
   Now, open your web browser and go to `http://localhost:5174`. The **Graph Visualizer** should be running locally on your machine.

---

### **Additional Notes**

* **GitHub Repository** : When pushing this project to GitHub, make sure to push the entire project (including the `node_modules` folder if necessary).
* For better performance, it's recommended not to push `node_modules`. You can add `node_modules` to `.gitignore` and make sure `pnpm-lock.yaml` is present to ensure the exact versions of dependencies.

  Example `.gitignore`:

```
  node_modules/
```

* **Running the Project on Another Machine** : If someone else wants to run the project:
* They should clone the repository.
* Install dependencies using `pnpm install`.
* Start the development server with `pnpm start`.

---

### **Summary**

1. Clone the repo.
2. Run `pnpm install` to install dependencies.
3. Start the app with `pnpm start`.
4. Open the browser at `http://localhost:5174`.

Once you push the project to GitHub, anyone can follow these steps to run the project locally using  **pnpm** .

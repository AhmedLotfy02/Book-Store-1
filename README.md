# Al-Book-Store
 <img src="https://i.ibb.co/bF19KYt/Al-Book-Store-logos-transparent.png" width="1000" height="800" alt="Al-Book-Store-logos-transparent" border="0">
 
<!-- <img src="https://i.ibb.co/25CRgVH/01.jpg" width="1000" height="600" alt="logo" border="0"> -->



<h2>Table Of Contents</h2>
<ul>
  <li><a href="#about">About the Project</a>
    <ul><li><a href="#build">Build with</a></li></ul>
  </li>
  <li><a href="#getStarted">Getting Started</a> 
    <ul>
    <li>
      <a href="#installation">Installation</a> 
      </li>
      <li><a href="#Running">Running </a> </li>
    </ul> 
  </li>  
    <li><a href="#structure">File Structure</a></li>
     <li><a href="#video">Demo Video</a></li>
  <li><a href="#screenshots">Screenshots</a> </li>
  <li><a href="#contributors">Contributors</a></li>
  
  
</ul>
<h2>Important Note</h2>
<blockquote>
This is My First Project using these technologies so it can't be the most optimized one and the files aren't organized in such perfect way ,we are still learning so wish me best of luck ^ ^.
</blockquote>

<h2 href="#about">About</h2>
<blockquote>
  <p>Al-Book-Store is full-stack web-application using <a href="https://angular.io/">Angularjs</a>,<a href="https://nodejs.org/en/">Node.js</a>,<a href="https://expressjs.com/">Express.js</a>,<a href="https://www.mongodb.com/">MongoDB</a></p>
</blockquote>
<h3 href="#build">Build with</h3>
<ul>
  <li><a href="https://angular.io/">Angular JS</a></li>
  <li><a href="https://ng-bootstrap.github.io/">ngBootstrap</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express.js</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://nodemailer.com/about/">NodeMailer</a></li>
      <li><a href="https://jwt.io/">Json Web Tokens</a></li>
        <li><a href="https://fontawesome.com/">Font Awesome</a></li>
          <li><a href="https://developer.paypal.com/developer/">Paypal Checkout</a></li>
            <li><a href="https://animate.style/#attention_seekers">Animate.css</a></li>






</ul>

<h2 href="#getStarted">Getting Started</h2>
<blockquote>
  <p>This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.
 </p>
</blockquote>
<h3 href="#installation">Installation</h3>
<ol>
  <li><strong><em>Clone the repository</em></strong>
    <blockquote>$ git clone https://github.com/AhmedLotfy02/Book-Store-1.git</blockquote>
  </li>
  <li> 
  <strong><em>Navigate to repository directory
</em></strong>
    <blockquote>$ cd Book-Store-1</blockquote>
  </li>
  <li> 
  <strong><em>Install dependencies
</em></strong>
    <blockquote>$ npm install</blockquote>
  </li>
</ol>
<h3 href="#Running">Running</h3>
<ol>
  <li><strong><em>Compiles and Development </em></strong>
    <blockquote>Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
</blockquote>
     <blockquote>Run `nodemon server.js` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
</blockquote>
  </li>
    <li><strong><em>To Build </em></strong>
    <blockquote>Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

</blockquote>
  </li>
    <li><strong><em>Running unit tests </em></strong>
    <blockquote>Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
</blockquote>
  </li>
 
</ol>

<h2 href="#structure">File Structure</h2>
 <div> 
  <pre>
AL Book-Store
├── README.md
├── angular.json
├── server.js
├── LICENSE
├── package-lock.json
├── package.json
├── .gitignore
├── .browserslistrc
├── tsconfig.app.json
├── tsconfig.json  
├── .tsconfig.spec.json
├── middleware
│   ├── auth-check.js
├── backend
│   ├── images
├── src
│   ├── environments
│   ├── assets
│   ├── app
|   |   ├── adminControl
|   |   |   ├── create
|   |   |   ├── delete
|   |   |   ├── update
|   |   |   ├── options
|   |   |   ├── header
|   |   ├── auth	
|   |   |   ├── auth.guard.ts
|   |   |   ├── auth.service.ts
|   |   |   ├── auth.data-model.ts
|   |   |   ├── auth-interceptor.ts
|   |   ├── checkout	
|   |   ├── dashboard	
|   |   ├── favorite-list	
|   |   ├── footer	
|   |   ├── forget-page	
|   |   ├── loading-screen	
|   |   ├── login-page	
|   |   ├── main-store
|   |   ├── profile	
|   |   ├── search-result	
|   |   ├── search-tool-bar
|   |   ├── sign-up
|   |   ├── sign-up-successfully
|   |   ├── snack-bars	
|   |   ├── app.component.css	
|   |   ├── app.component.html	
|   |   ├── app.component.spec.ts	
|   |   ├── app.component.ts	
|   |   ├── app.module.ts	
|   |   ├── app-routing.module.ts	
|   |   ├── Book-Model.ts
|   |   ├── overall.service.spec.ts
|   |   ├── overall.service.ts
|   |   ├── signUp-data-model.ts
│   ├── main.ts
|   ├── polyfills.ts
│   └── test.ts
│   └── styles.css
|   |── favicon.ico	
|   |── index.html	
└── node_modules	
  </pre>
</div>

<h2 href="#screenshots">ScreenShots</h2>
<br>
<br>

<ol>
  <li>
  <strong><em>Login Page </em></strong><br>
    <ul>
      <li> Validations
        <ul>
          <li>Username and password must be entered</li>
          <li>Username and password must be existed by signing up or admin added them before</li>
        </ul>
      </li>
      <li>
        Forget your username sending you email to your email contains username you signed up with it
      </li>
    </ul>
    <br>
<img src="https://i.ibb.co/nzhk49L/01.jpg"  alt="Login Page" border="0">
    <br>
    <img src="https://i.ibb.co/x3J75Mr/02.jpg"  alt="Login Page" border="0">
    <br>
    <img src="https://i.ibb.co/p0ZMWjh/03.jpg" alt="Login Page"  border="0">
    <br>
    <img src="https://i.ibb.co/JtPc3Jg/04.jpg" alt="Login Page"  border="0">
    <br>
  </li>
  <li>
      <strong><em>Forget Username Page </em></strong><br>
    <ul>
      <li>Validations:
        <ul>
        <li>Entering invalid email or email which isn't signed up before will cause a warn</li>
        </ul>
      </li>
      <li>By entering email that is signed up before, you will receive an email contains your username, this is done by NodeMailer</li>
    </ul>
      <br>
  <img src="https://i.ibb.co/xh0XGQP/15.jpg"   alt="15" border="0" />
    <br>
  </li>
  <li>
   <strong><em>SignUp Page </em></strong>
    <ul>  
      <li>
      Validations:
        <ul><li>
          All validations done using reactive form approach 
          </li>
        <li>Entering email or username that is already exist will cause error warn as they are unique values in database</li>
        </ul>
      </li>
      <li>
      Password is hashed at backend by bcrypt library and stored in database
      </li>
    </ul>
    <br>
  <img src="https://i.ibb.co/WcwC4Nw/05.jpg" alt="05" border="0">
    <br><img src="https://i.ibb.co/3dSXDJ6/06.jpg" alt="06" border="0"><br>
  </li>
  <li>
     <strong><em>Store</em></strong>
    <br>
    <img src="https://i.ibb.co/b7mdLWW/07.jpg" alt="07" border="0">
    <br>
    <ul>
      <li> Book Examples
       <img src="https://i.ibb.co/fnXpZJr/08.jpg" alt="08" border="0">
      </li>
      <li> Footer
      <img src="https://i.ibb.co/h80MZ7Q/09.jpg" alt="09" border="0">
      </li>
      <li> Nav Bar
        <img src="https://i.ibb.co/D8xTwfB/26.jpg" alt="26" border="0" />
      </li>
    </ul>
    <br>
  </li>
  <li>  
  Profile Page
    <br>
    <img src="https://i.ibb.co/fqV518T/10.jpg" alt="10" border="0">
    <ul>
      <li> Change password
      <img src="https://i.ibb.co/PQfLsgH/27.jpg" alt="27" border="0">
      </li>
    </ul>
    <br>
  </li>
  <li>
    Dashboard Page
    <ul>
      <li>Calculates the total price</li>
    </ul>
    <img src="https://i.ibb.co/GvBHKhX/11.jpg" alt="11" border="0">
  </li>
  <li>
  Checkout
    <ul>
      <li>Using Paypal Sandbox you can pay by paypal or debit card
        <ul>
          <li><img src="https://i.ibb.co/DVjpQgt/12.jpg" alt="12" border="0"></li>
          <li><img src="https://i.ibb.co/xD8K1jv/13.jpg" alt="13" border="0"></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
  Favorites List
    <ul>
      <li>Contains books you have chosen before to go to favorite list</li>
      <img src="https://i.ibb.co/FDvnHWH/14.jpg" alt="14" border="0">
    </ul>
  </li>
  <li>
  Admin Panel (who ownes the website)
    <ul>
      Admin can create,update,delete books or users
      <li>
      interface
        <img src="https://i.ibb.co/kSjYRGS/16.jpg" alt="16" border="0"> 
        <ul>
          <li>
          Common interface 
           <img src="https://i.ibb.co/VggzmcC/17.jpg" alt="17" border="0">
          </li>
          <li>
            Create Book
                <ul>
              <li>Reponse message will be displayed either book is created or an error occured</li>
            </ul>
            <img src="https://i.ibb.co/BjBSN5f/18.jpg" alt="18" border="0">
          </li>
          <li> Create User
            <ul>
              <li>Validations: Entering an existing username or email will cause warning</li>
              <li>Reponse message will be displayed either user is created or an error occured</li>
            </ul>
          <img src="https://i.ibb.co/t47cgzY/19.jpg" alt="19" border="0">
          </li>
          <li> Update User
              <ul>
              <li>Reponse message will be displayed either user is updated or an error occured</li>
            </ul>
           <img src="https://i.ibb.co/bdb43wN/20.jpg" alt="20" border="0">
          </li>
          <li> Update Book
              <ul>
              <li>Reponse message will be displayed either book is updated or an error occured</li>
            </ul>
          <img src="https://i.ibb.co/Z28wbdG/21.jpg" alt="21" border="0">
          </li>
          <li> Delete Book 
              <ul>
              <li>Reponse message will be displayed either book is deleted or an error occured</li>
            </ul>
          <img src="https://i.ibb.co/3R6NSqL/22.jpg" alt="22" border="0">
          </li>
          <li> Delete User  
              <ul>
              <li>Reponse message will be displayed either user is deleted or an error occured</li>
            </ul>
            <img src="https://i.ibb.co/SxHZwJ3/23.jpg" alt="23" border="0">      
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    When you are logging in and wants to return to login page or signup this message will appear as you are authenticated
  <img src="https://i.ibb.co/b3tB0VG/24.jpg" alt="24" border="0">
  </li>
  <li>
  Search 
    <ul>
      <li> Book not found message
        <img src="https://i.ibb.co/JFNFTFq/25.jpg" alt="25" border="0">
      </li>
    </ul>
  </li>
</ol>


<h2 href="#video">Demo Video</h2>
<p>https://youtu.be/sZgJEthHZXk</p>


<h2 href="#contributors">Contributors</h2>
<table>
  <tbody>
    <tr>
    <td align="center">
  <img src="https://user-images.githubusercontent.com/76037906/132257122-e9ea49d8-a912-4d19-8425-08d3847c96a6.jpg" alt="Ahmed Lotfy" width="150px">
      <br>
      <sub href="https://github.com/AhmedLotfy02"><strong>Ahmed Lotfy</strong></sub>
  </td> 
    </tr>
  </tbody>
</table>


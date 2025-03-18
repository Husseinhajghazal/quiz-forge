export const questionTemplate = `<style>
      div.file * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      div.file {
        dir: ltr;
        background-color: white;
        width: 210mm;
        padding: 5mm;
      }

      div.file .meta {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5mm 0;
      }

      .meta .school { font-size: 13mm; }
      .meta .subject { font-size: 8mm; }
      .meta .cont {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-top: 5mm;
      }

      .main {
        border-bottom: .5mm solid black;
        border-top: .5mm solid black;
        padding: 5mm !important;
        display: flex;
        flex-direction: column;
        gap: 10mm;
      }

      .main .type h1 {
        font-size: 6mm;
      }

      .main .type .q {
        font-size: 5mm;
      }

      .main .classic p {
        font-size: 5mm;
        padding-bottom: 20mm;
      }

      .main .multiple, .main .truefalse {
        display: flex;
        flex-direction: column;
        gap: 3mm;
      }

      .main .type .choices {
        display: flex;
        flex-wrap: wrap;
        gap: 5mm;
        font-size: 4mm;
      }

      .footer {
        display: flex;
        flex-direction: column;
        gap: 3mm;
        padding: 5mm;
      }
    </style>
      <!-- META -->
      <div class="meta">
        <p class="school"><%= metadata.school %></p>
        <p class="subject"><%= metadata.subject %></p>
        <div class="cont">
          <div class="left">
            <p class="student">student name:</p>
            <p class="marks">marks:</p>
          </div>
          <div class="right">
            <p class="time"><%= metadata.duration %> minutes</p>
            <p class="date"><%= metadata.date %></p>
          </div>
        </div>
      </div>

      <!-- MAIN -->
      <div class="main">

        <div class="type classic">
          <h1>Answer the following questions:</h1>
          <div class="questions">
            <% questions.classical.forEach(function(q, i) { %>
              <p><%= i+1 %>) <%= q.question %></p>
            <% }) %>
          </div>
        </div>

        <div class="type multiple">
          <h1>Choose the correct answer:</h1>
          
          <% questions.multipleChoices.forEach(function(q, i) { %>
          <div class="question">
            <p class="q"><%= i+1 %>) <%= q.question %></p>
            <div class="choices">
              <% Object.values(q.choices).forEach(function(a, i) { %>
                <p><%= i+1 %>) <%= a %></p>
              <% }) %>
            </div>
          </div>
          <% }) %>
          
        </div>
        
        <div class="type truefalse">
          <h1>True or False?</h1>

          <% questions.trueFalse.forEach(function(q, i) { %>
            <div class="question">
              <p class="q"><%= i+1 %>) <%= q.question %></p>
              <div class="choices">
                <div class="choices">
                  <p>true</p>
                  <p>false</p>
                </div>
              </div>
            </div>
          <% }) %>
        </div>
      </div>

      <!-- FOOTER -->
       <div class="footer">
        <p class="teacher"><%= metadata.teacher %></p>
        <p class="note"><%= metadata.note %></p>
       </div>`



export const answersTemplate = `<style>
      div.file * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      div.file {
        dir: ltr;
        background-color: white;
        width: 210mm;
        padding: 5mm;
      }

      div.file .meta {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5mm 0;
      }

      .meta .school { font-size: 13mm; }
      .meta .subject { font-size: 8mm; }
      .meta .cont {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-top: 5mm;
      }

      .main {
        border-bottom: .5mm solid black;
        border-top: .5mm solid black;
        padding: 5mm !important;
        display: flex;
        flex-direction: column;
        gap: 10mm;
      }

      .main .type h1 {
        font-size: 6mm;
      }

      .main .type .q {
        font-size: 5mm;
      }

      .main .classic p {
        font-size: 5mm;
      }

      .main .multiple, .main .truefalse {
        display: flex;
        flex-direction: column;
        gap: 3mm;
      }

      .main .type .choices {
        display: flex;
        flex-wrap: wrap;
        gap: 5mm;
        font-size: 4mm;
      }

      .footer {
        display: flex;
        flex-direction: column;
        gap: 3mm;
        padding: 5mm;
      }
    </style>
      <!-- META -->
      <div class="meta">
        <p class="school"><%= metadata.school %></p>
        <p class="subject"><%= metadata.subject %></p>
        <div class="cont">
          <div class="left">
            <p class="student">student name:</p>
            <p class="marks">marks:</p>
          </div>
          <div class="right">
            <p class="time"><%= metadata.duration %> minutes</p>
            <p class="date"><%= metadata.date %></p>
          </div>
        </div>
      </div>

      <!-- MAIN -->
      <div class="main">

        <div class="type classic">
          <h1>Answers for the classical questions:</h1>
          <div class="questions">
            <% questions.classical.forEach(function(q, i) { %>
              <p><%= i+1 %>) <%= q.answer %></p>
            <% }) %>
          </div>
        </div>

        <div class="type multiple">
          <h1>Answers for multiple choice questions:</h1>
          
          <% questions.multipleChoices.forEach(function(q, i) { %>
          <div class="question">
            <p class="q"><%= i+1 %>) <%= q.answer %></p>
          </div>
          <% }) %>
          
        </div>
        
        <div class="type truefalse">
          <h1>Answers for True or False questions:</h1>

          <% questions.trueFalse.forEach(function(q, i) { %>
            <div class="question">
              <p class="q"><%= i+1 %>) <%= q.answer %></p>
            </div>
          <% }) %>
        </div>
      </div>

      <!-- FOOTER -->
       <div class="footer">
        <p class="teacher"><%= metadata.teacher %></p>
        <p class="note"><%= metadata.note %></p>
       </div>`
export const questionTemplate = `<style>
  div.file {
    dir: ltr;
    background-color: white;
    width: 210mm;
    padding: 5mm;
    font-family: 'Times New Roman', serif;
    line-height: 1.4;
  }

  .meta {
    text-align: center;
    margin-bottom: 8mm;
  }

  .meta .school {
    font-size: 13mm;
    font-weight: bold;
    margin-bottom: 4mm;
  }

  .meta-cont {
    display: flex;
    justify-content: space-between;
    border-top: 0.5mm solid #ccc;
    padding-top: 4mm;
    margin: 0 10mm;
  }

  .main-section {
    border: 0.5mm solid #000;
    margin: 3mm 0;
    padding: 5mm !important;
  }

  .section-title {
    font-size: 6mm;
    margin-bottom: 6mm;
    text-decoration: underline;
  }

  .question-block {
    margin-bottom: 8mm;
  }

  /* Classical Questions */
  .classical-question {
    margin-bottom: 10mm;
  }

  .classical-question p {
    font-size: 5mm;
    margin-left: 5mm;
  }

  /* Multiple Choice */
  .mcq-question {
    margin-bottom: 8mm;
  }

  .mcq-choices {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3mm;
    margin-left: 8mm;
    margin-top: 3mm;
  }

  /* True/False */
  .tf-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5mm;
  }

  .tf-choices {
    display: flex;
    gap: 10mm;
    margin-right: 15mm;
  }

  .classical-question, .mcq-question, .tf-question {
    page-break-inside: avoid;
  }

  .footer {
    border-top: 0.5mm solid #ccc;
    padding-top: 5mm;
    margin-top: 5mm;
    display: flex;
    flex-direction: column;
    gap: 2mm;
  }

  .question-number {
    display: inline-block;
    min-width: 8mm;
    font-weight: bold;
  }

  .teacher-note {
    font-style: italic;
    font-size: 4mm;
  }
</style>

<div class="meta">
  <p class="school"><%= metadata.school %></p>
  <div class="meta-cont">
    <div class="student-info">
      <p>Student Name: __________________</p>
      <p>Marks: _______ / _______</p>
    </div>
    <div class="exam-info">
      <p>Time: <%= metadata.duration %> minutes</p>
      <p>Date: <%= metadata.date %></p>
    </div>
  </div>
</div>

<div class="main">
  <!-- Classical Questions -->
  <div class="main-section classical-section">
    <h2 class="section-title">Answer the following questions:</h2>
    <% questions.classical.forEach(function(q, i) { %>
    <div class="classical-question">
      <p><span class="question-number"><%= i+1 %>)</span> <%= q.question %></p>
    </div>
    <% }) %>
  </div>

  <!-- Multiple Choice -->
  <div class="main-section mcq-section">
    <h2 class="section-title">Choose the correct answer:</h2>
    <% questions.multipleChoices.forEach(function(q, i) { %>
    <div class="mcq-question">
      <p><span class="question-number"><%= i+1 %>)</span> <%= q.question %></p>
      <div class="mcq-choices">
        <% Object.values(q.choices).forEach(function(a, i) { %>
        <div class="choice">
          <span class="question-number"><%= String.fromCharCode(65 + i) %>)</span> <%= a %>
        </div>
        <% }) %>
      </div>
    </div>
    <% }) %>
  </div>

  <!-- True/False -->
  <div class="main-section tf-section">
    <h2 class="section-title">True or False?</h2>
    <% questions.trueFalse.forEach(function(q, i) { %>
    <div class="tf-question">
      <p><span class="question-number"><%= i+1 %>)</span> <%= q.question %></p>
      <div class="tf-choices">
        <span>True</span>
        <span>False</span>
      </div>
    </div>
    <% }) %>
  </div>
</div>

<div class="footer">
  <p>Teacher: <%= metadata.teacher %></p>
  <% if(metadata.note) { %>
  <p class="teacher-note">Note: <%= metadata.note %></p>
  <% } %>
</div>`;

export const answersTemplate = `<style>
  div.file {
    dir: ltr;
    background-color: white;
    width: 210mm;
    padding: 5mm;
    font-family: 'Times New Roman', serif;
    line-height: 1.4;
  }

  .meta {
    text-align: center;
    margin-bottom: 8mm;
  }

  .meta .school {
    font-size: 13mm;
    font-weight: bold;
    margin-bottom: 4mm;
  }

  .meta-cont {
    display: flex;
    justify-content: space-between;
    border-top: 0.5mm solid #ccc;
    padding-top: 4mm;
    margin: 0 10mm;
  }

  .main-section {
    border: 0.5mm solid #000;
    margin: 3mm 0;
    padding: 5mm !important;
  }

  .section-title {
    font-size: 6mm;
    margin-bottom: 6mm;
    text-decoration: underline;
  }

  .answer-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80mm, 1fr));
    gap: 5mm;
    padding: 0 5mm;
  }

  .answer-item {
    font-size: 5mm;
    padding: 3mm;
    page-break-inside: avoid;
  }

  .answer-item strong {
    display: inline-block;
    min-width: 8mm;
  }

  .classical-question, .mcq-question, .tf-question {
    page-break-inside: avoid;
  }

  .footer {
    border-top: 0.5mm solid #ccc;
    padding-top: 5mm;
    margin-top: 5mm;
    display: flex;
    flex-direction: column;
    gap: 2mm;
  }

  .teacher-info {
    font-weight: bold;
  }

  .note {
    font-style: italic;
    font-size: 4mm;
  }
</style>

<div class="meta">
  <p class="school"><%= metadata.school %></p>
  <div class="meta-cont">
    <div class="student-info">
      <p>Student Name: __________________</p>
      <p>Marks: _______ / _______</p>
    </div>
    <div class="exam-info">
      <p>Time: <%= metadata.duration %> minutes</p>
      <p>Date: <%= metadata.date %></p>
    </div>
  </div>
</div>

<div class="main">
  <div class="main-section">
    <h2 class="section-title">Classical Questions Answers</h2>
    <div class="answer-list">
      <% questions.classical.forEach(function(q, i) { %>
      <div class="answer-item">
        <strong><%= i+1 %>)</strong> <%= q.answer %>
      </div>
      <% }) %>
    </div>
  </div>

  <div class="main-section">
    <h2 class="section-title">Multiple Choice Answers</h2>
    <div class="answer-list">
      <% questions.multipleChoices.forEach(function(q, i) { %>
      <div class="answer-item">
        <strong><%= i+1 %>)</strong> <%= q.answer %>
      </div>
      <% }) %>
    </div>
  </div>

  <div class="main-section">
    <h2 class="section-title">True/False Answers</h2>
    <div class="answer-list">
      <% questions.trueFalse.forEach(function(q, i) { %>
      <div class="answer-item">
        <strong><%= i+1 %>)</strong> 
        <span style="color: <%= q.answer === 'true' ? 'green' : 'red' %>">
          <%= q.answer %>
        </span>
      </div>
      <% }) %>
    </div>
  </div>
</div>

<div class="footer">
  <div class="teacher-info">
    <p>Teacher: <%= metadata.teacher %></p>
  </div>
  <% if(metadata.note) { %>
  <div class="note">
    <p><%= metadata.note %></p>
  </div>
  <% } %>
</div>`;

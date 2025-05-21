
import { questionBank } from "./questionBank.js";

// Submission system variables
let pendingSubmissions = JSON.parse(localStorage.getItem('pendingSubmissions')) || [];

const ADMIN_PASSWORD_PARTS = [
  "un", 
  "i1i", 
  "2i3i"  
];

 const ADMIN_PASSWORD = ADMIN_PASSWORD_PARTS.join('').replace(/ /g, ''); 


// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme

    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeToggle('light');
    
    
    // Initialize question bank display
    initQuestionBank();
    
    // Initialize submission system
    initSubmissionSystem();
    
    // Set up mobile toggle for past papers
    setupMobileToggle();
    
    // Initialize with first subject
    if (Object.keys(questionBank).length > 0) {
        const firstSubject = Object.keys(questionBank)[0];
        renderSubjectContent(firstSubject);
        document.querySelector('#subjectTabs li').classList.add('active');
    }
});

//For dark Mode
const btn = document.getElementById('themeToggle');
btn.addEventListener('click',function(){
   const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    updateThemeToggle(newTheme);
})
// Theme functions
function updateThemeToggle(theme) {
    const icon = document.querySelector('#themeToggle i');
    const text = document.querySelector('#themeToggle');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

// Question Bank display functions
function initQuestionBank() {
    renderSubjectTabs();
    setupChapterAccordions();
}

function renderSubjectTabs() {
    const subjectTabs = document.getElementById('subjectTabs');
    subjectTabs.innerHTML = '';
    
    Object.keys(questionBank).forEach(subjectKey => {
        const subject = questionBank[subjectKey];
        const tab = document.createElement('li');
        tab.textContent = subject.name;
        
        tab.addEventListener('click', () => {
            document.querySelectorAll('#subjectTabs li').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSubjectContent(subjectKey);
        });
        
        subjectTabs.appendChild(tab);
    });
}

function renderSubjectContent(subjectKey) {
    const subject = questionBank[subjectKey];
    renderChapterQuestions(subject);
    renderPastPapers(subject);
    setupChapterAccordions();
}

function renderChapterQuestions(subject) {
    const chapterQuestions = document.getElementById('chapterQuestions');
    let questionCount = 1;
    
    chapterQuestions.innerHTML = `
        <h1>${subject.name} Questions</h1>
        ${subject.contributors ? `<p class="contributors">Contributors: ${subject.contributors.join(', ')}</p>` : ''}
        ${Object.keys(subject.chapters).map(chapterKey => {
            const chapter = subject.chapters[chapterKey];
            return `
                <div class="chapter">
                    <h2><i class="fas fa-bookmark"></i> ${chapter.name}</h2>
                    <div class="chapter-content">
                        ${Object.keys(chapter.questions).map(questionKey => {
                            const question = chapter.questions[questionKey];
                            return `
                                <div class="question">
                                    <h3>
                                        ${question.title}
                                        ${question.contributor ? `<span class="contributor-badge">${question.contributor}</span>` : ''}
                                    </h3>
                                    <div class="question-text">${question.content}</div>
                                      ${question.image ? 
            `<div class="diagram">
                <img src="${question.image}" alt="${question.title} diagram">
            </div>` 
            : ''
        }
                                    <div class="question-meta">
                                        ${question.date ? `<span>Added: ${question.date}</span>` : ''}
                                        ${question.approved ? '<span><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

function renderPastPapers(subject) {
    const pdfContainer = document.getElementById('pdfContainer');
    
    if (!subject.pastPapers || Object.keys(subject.pastPapers).length === 0) {
        pdfContainer.innerHTML = '<p>No past papers available for this subject.</p>';
        return;
    }
    
    pdfContainer.innerHTML = Object.keys(subject.pastPapers).map(paperKey => {
        const paper = subject.pastPapers[paperKey];
        return `
            <div class="pdf-card">
                <h3>${paper.title}</h3>
                <p>Year: ${paper.year}</p>
                <a href="past-papers/${paper.filename}" class="download-link" download>
                    <i class="fas fa-download"></i> Download PDF
                </a>
            </div>
        `;
    }).join('');
}

function setupChapterAccordions() {
    const chapterHeaders = document.querySelectorAll('.chapter h2');
    
    chapterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const chapterContent = this.nextElementSibling;
            this.classList.toggle('collapsed');
            
            if (this.classList.contains('collapsed')) {
                chapterContent.style.maxHeight = '0';
                chapterContent.style.overflow = 'hidden';
                chapterContent.style.marginBottom = '0';
            } else {
                chapterContent.style.maxHeight = chapterContent.scrollHeight + 'px';
                chapterContent.style.overflow = 'visible';
                chapterContent.style.marginBottom = '1.5rem';
            }
        });
        
        // Initialize all chapters as expanded
        // header.classList.remove('collapsed');
        // const chapterContent = header.nextElementSibling;
        // chapterContent.style.maxHeight = chapterContent.scrollHeight + 'px';
    });
}

// Mobile toggle functions
function setupMobileToggle() {
    const mobileToggle = document.getElementById('mobileToggle');
    const pdfContainer = document.getElementById('pdfContainer');
    
    mobileToggle.addEventListener('click', function() {
        pdfContainer.classList.toggle('expanded');
        mobileToggle.classList.toggle('expanded');
    });
}

// Submission system functions
function initSubmissionSystem() {
    // Add question button
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    addQuestionBtn.addEventListener('click', openSubmissionModal);
    
    // Modal elements
    const modal = document.getElementById('submissionModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
    
    // Form submission
    const form = document.getElementById('questionForm');
    form.addEventListener('submit', handleQuestionSubmit);
    
    // Populate subject dropdown
    const subjectSelect = document.getElementById('subjectSelect');
    Object.keys(questionBank).forEach(subjectKey => {
        const option = document.createElement('option');
        option.value = subjectKey;
        option.textContent = questionBank[subjectKey].name;
        subjectSelect.appendChild(option);
    });
    
    // Update chapter dropdown when subject changes
    subjectSelect.addEventListener('change', updateChapterDropdown);
    
    // Admin panel toggle (hidden by default)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'a') {
            const password = prompt("Enter admin password:");
            if (password === ADMIN_PASSWORD) {
                const adminPanel = document.getElementById('adminPanel');
                adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
                if (adminPanel.style.display === 'block') {
                    renderPendingQuestions();
                }
            }
        }
    });
}

function openSubmissionModal() {
    const modal = document.getElementById('submissionModal');
    modal.style.display = 'block';
    document.getElementById('submitterName').focus();
}

function updateChapterDropdown() {
    const subjectSelect = document.getElementById('subjectSelect');
    const chapterSelect = document.getElementById('chapterSelect');
    const subjectKey = subjectSelect.value;
    
    chapterSelect.innerHTML = '';
    Object.keys(questionBank[subjectKey].chapters).forEach(chapterKey => {
        const option = document.createElement('option');
        option.value = chapterKey;
        option.textContent = questionBank[subjectKey].chapters[chapterKey].name;
        chapterSelect.appendChild(option);
    });
}

function handleQuestionSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const subjectKey = form.subjectSelect.value;
    const chapterKey = form.chapterSelect.value;
    // const questionTitle = form.questionTitle.value;
    const questionContent = form.questionContent.value;
    const submitterName = form.submitterName.value;
    
    // Validate input
    if (!submitterName  || !questionContent) {
        alert("Please fill all required fields");
        return;
    }
    
    // Create submission object
    const submission = {
        id: Date.now().toString(),
        subjectKey,
        chapterKey,
        question: {
            title: "",
            content: questionContent,
            contributor: submitterName,
            date: new Date().toISOString().split('T')[0],
            approved: false
        }
    };
    
    // Add to pending submissions
    pendingSubmissions.push(submission);
    localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
    
    // Update contributors list if new
    if (!questionBank[subjectKey].contributors.includes(submitterName)) {
        questionBank[subjectKey].contributors.push(submitterName);
    }
    
    // Close modal and reset form
    document.getElementById('submissionModal').style.display = 'none';
    form.reset();
    
    alert("Question submitted for admin approval. Thank you!");
}

function renderPendingQuestions() {
    const pendingContainer = document.getElementById('pendingQuestions');
    pendingContainer.innerHTML = '';
    
    if (pendingSubmissions.length === 0) {
        pendingContainer.innerHTML = '<p>No pending questions for approval.</p>';
        return;
    }
    
    pendingSubmissions.forEach(submission => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'pending-question';
        
        questionDiv.innerHTML = `
            <h4>${submission.question.title}</h4>
            <p><strong>Subject:</strong> ${questionBank[submission.subjectKey].name}</p>
            <p><strong>Chapter:</strong> ${questionBank[submission.subjectKey].chapters[submission.chapterKey].name}</p>
            <pre class="question-text">${submission.question.content}</pre>
            <p><strong>Submitted by:</strong> ${submission.question.contributor}</p>
            <div class="pending-actions">
                <button class="approve-btn" data-id="${submission.id}">Approve</button>
                <button class="reject-btn" data-id="${submission.id}">Reject</button>
            </div>
        `;
        
        pendingContainer.appendChild(questionDiv);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.approve-btn').forEach(btn => {
        btn.addEventListener('click', () => handleApproval(btn.dataset.id, true));
    });
    
    document.querySelectorAll('.reject-btn').forEach(btn => {
        btn.addEventListener('click', () => handleApproval(btn.dataset.id, false));
    });
}

function handleApproval(submissionId, approve) {
    const submissionIndex = pendingSubmissions.findIndex(s => s.id === submissionId);
    if (submissionIndex === -1) return;
    
    const submission = pendingSubmissions[submissionIndex];
    
    if (approve) {
        // Add to main question bank
        const questionKey = 'q' + (Object.keys(questionBank[submission.subjectKey].chapters[submission.chapterKey].questions).length + 1);
        questionBank[submission.subjectKey].chapters[submission.chapterKey].questions[questionKey] = {
            ...submission.question,
            approved: true
        };
        
        // Update the displayed content if this is the current subject
        const activeTab = document.querySelector('#subjectTabs li.active');
        if (activeTab && activeTab.textContent === questionBank[submission.subjectKey].name) {
            renderSubjectContent(submission.subjectKey);
        }
    }
    
    // Remove from pending
    pendingSubmissions.splice(submissionIndex, 1);
    localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
    
    // Re-render pending list
    renderPendingQuestions();
}
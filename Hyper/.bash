#My aliases
alias gs='git status -sb'
alias gaa='git add --all'
alias gc='git commit -m $2'
alias gp='git push'
alias gpo='git push origin'
alias gpl='git pull'
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

alias ls='ls -F --color=auto --show-control-chars'
alias ll='ls -l'
alias rm='rm -iv'

# Prompt style
if test -f /etc/profile.d/git-sdk.sh
then
    TITLEPREFIX=SDK-${MSYSTEM#MINGW}
else
    TITLEPREFIX=$MSYSTEM
fi

if test -f ~/.config/git/git-prompt.sh
then
    . ~/.config/git/git-prompt.sh
else
    PS1='\[\033]0; Git Bash$PWD\007\]' # set window title
    PS1="$PS1"'\n'                 # new line
    PS1="$PS1"'\[\033[32m\]'       # change to green
    PS1="$PS1"'\u '             # user@host<space>
    PS1="$PS1"'\[\033[35m\]'       # change to purple
    #PS1="$PS1"'$MSYSTEM '          # show MSYSTEM
    PS1="$PS1"'\[\033[33m\]'       # change to white
    PS1="$PS1""\W"                 # current working directory replace W with w to show full folder structure

    if test -z "$WINELOADERNOEXEC"
    then
        GIT_EXEC_PATH="$(git --exec-path 2>/dev/null)"
        COMPLETION_PATH="${GIT_EXEC_PATH%/libexec/git-core}"
        COMPLETION_PATH="${COMPLETION_PATH%/lib/git-core}"
        COMPLETION_PATH="$COMPLETION_PATH/share/git/completion"
        if test -f "$COMPLETION_PATH/git-prompt.sh"
        then
            . "$COMPLETION_PATH/git-completion.bash"
            . "$COMPLETION_PATH/git-prompt.sh"
            PS1="$PS1"'\[\033[36m\]'  # change color to cyan
            PS1="$PS1"'`__git_ps1`'   # bash function
        fi
    fi

    

    PS1="$PS1"' \[\033[37m\][\t]'  # 24h time, white change to HH:MM:SS format
    PS1="$PS1"'\[\033[0m\]'        # change color
    PS1="$PS1"'\n'                 # new line
    PS1="$PS1"'⟹  '                 # prompt: always ⟹
fi

MSYS2_PS1="$PS1"               # for detection by MSYS2 SDK's bash.basrc

# Evaluate all user-specific Bash completion scripts (if any)
if test -z "$WINELOADERNOEXEC"
then
    for c in "$HOME"/bash_completion.d/*.bash
    do
        # Handle absence of any scripts (or the folder) gracefully
        test ! -f "$c" ||
        . "$c"
    done
fi

#Git status options
export GIT_PS1_SHOWSTASHSTATE=true
export GIT_PS1_SHOWDIRTYSTATE=true
export GIT_PS1_SHOWUNTRACKEDFILES=true
export GIT_PS1_SHOWUPSTREAM="auto"

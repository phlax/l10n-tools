
import subprocess
import sys


CMD_WEBPACK = (
    "export NVM_DIR=\"$HOME/.nvm\" && "
    ". ~/.nvm/nvm.sh && "
    "./node_modules/.bin/webpack -v%s "
    "--display-error-details "
    "--progress --colors%s")
CMD_WEBEXT = (
    "export NVM_DIR=\"$HOME/.nvm\" && "
    ". ~/.nvm/nvm.sh && "
    "./node_modules/.bin/web-ext -v%s "
    "run --verbose --bc "
    "-u about:debugging -s %s%s")


def run_webpack(*args):
    # this would benefit from argparse 8/
    watch = ''
    if "-w" in args:
        watch = ' -w'
        args = list(args)
        args.remove('-w')
        args = tuple(args)
    extra = ""
    if args:
        extra = " %s" % ".".join(args)
    command = CMD_WEBPACK % (watch, extra)
    subprocess.call(command, shell=True)


def run_webext(*args):
    # and this 8/
    extra = ""
    firefox = ''
    if "-f" in args:
        args = list(args)
        firefox = args[args.index("-f") + 1]
        args.remove('-f')
        args.remove(firefox)
        args = tuple(args)
        firefox = " -f %s" % firefox
    if args:
        extra = " %s" % " ".join(args)
    path = './extensions/tools'
    command = CMD_WEBEXT % (firefox, path, extra)
    subprocess.call(command, shell=True)


def run_nvm_export_env(*args):
    command = ". ~/.nvm/nvm.sh && env"
    result = subprocess.check_output(
        command, shell=True, executable="/bin/bash")
    newenv = dict(line.partition('=')[::2] for line in result.split('\n'))
    for k, v in newenv.items():
        if k.startswith("NVM"):
            sys.stdout.write("%s=%s\n" % (k, v))
